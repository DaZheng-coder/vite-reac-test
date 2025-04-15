import { Select, SelectProps } from "antd";
import axios from "axios";
import { useCallback, useEffect, useRef, useState } from "react";

const DEFAULT_URL = "/api/v1/get_user_list";

/**
 * 用户基础数据结构
 */
export interface IBaseUserData {
  id: string;
  name: string;
  user: string;
}

/**
 * 用户信息配置项
 */
export interface IConfig<T> {
  fetchUrl: string;
  format: (userList: T) => ISelectItem;
}

interface IUserSelectorProps<T> {
  onSelect?: (selectUsers: T[]) => void;
  selectProps?: SelectProps;
  config?: IConfig<T>;
}

/**
 * antd 选项结构
 */
interface ISelectItem {
  label: string;
  value: string;
}

const UserSelector = <T extends IBaseUserData>(
  props: IUserSelectorProps<T>
) => {
  const { onSelect, config, selectProps = {} } = props;
  const userMapRef = useRef<Map<string, T>>(new Map()); // 映射用户源数据
  const [selectList, setSelectList] = useState<ISelectItem[]>([]); // 下拉列表数据
  const [loading, setLoading] = useState<boolean>(false);

  /**
   * 获取选中用户
   */
  const handleChange = useCallback(
    (selected: string | string[]) => {
      const selectedIds = Array.isArray(selected) ? selected : [selected];
      const selectUsers = selectedIds.map((id) => {
        return userMapRef.current.get(id);
      });
      onSelect?.(selectUsers as T[]);
    },
    [onSelect]
  );

  /**
   * 获取用户列表
   */
  const getUsers = useCallback(async () => {
    setLoading(true);
    try {
      userMapRef.current.clear();
      const userList = await axios.get(config?.fetchUrl || DEFAULT_URL);
      const selectData = userList.data.map((item: T) => {
        userMapRef.current.set(item.id, item);
        if (config?.format) {
          return config.format(item);
        }
        return {
          label: `${item.name} (${item.user})`,
          value: item.id,
        };
      });
      setSelectList(selectData);
    } catch (error) {
      console.log("getUsers error", error);
    } finally {
      setLoading(false);
    }
  }, [config]);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <Select
      style={{ width: 200 }}
      onChange={handleChange}
      options={selectList}
      loading={loading}
      {...selectProps}
    />
  );
};

export default UserSelector;
