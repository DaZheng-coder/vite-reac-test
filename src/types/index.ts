/**
 * 轮播图实体类
 * <p>
 * 对应数据库中的carousel_banner表，用于系统首页轮播图展示。
 * </p>
 *
 * CarouselBanner
 */
export interface CarouselBanner {
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 图片文件ID，关联files表
   */
  fileId?: number;
  /**
   * 图片文件名称（非数据库字段）
   */
  fileName?: string;
  /**
   * 轮播图ID
   */
  id?: number;
  /**
   * 图片额外元数据（非数据库字段）
   */
  imageMeta?: string;
  /**
   * 图片访问URL（非数据库字段）
   */
  imageUrl?: string;
  /**
   * 点击图片跳转链接，可为空
   */
  redirectUrl?: string;
  /**
   * 展示排序值，越小越靠前
   */
  sortOrder?: number;
  /**
   * 状态：0=禁用，1=启用
   */
  status?: number;
  /**
   * 主标题
   */
  title?: string;
  /**
   * 最后更新时间
   */
  updateTime?: string;
}

export interface NavigationMenu {
  /**
   * 非数据库字段，子导航列表
   */
  children?: NavigationMenu[];
  createTime?: string;
  /**
   * 导航图标，存储字符串（例如：FontAwesome或Element-UI图标名称）
   */
  icon?: string;
  id?: number;
  linkUrl?: string;
  parentId?: number;
  sortOrder?: number;
  status?: number;
  target?: string;
  title?: string;
  updateTime?: string;
}


export interface IRouteConfigItem {
  id: number;
  path: string;
  label: string;
  element: React.ReactNode;
  children?: IRouteConfigItem[];
  sourceData?: NavigationMenu
}

/**
 * 新闻文章分类实体类
 * <p>
 * 对应数据库中的news_category表，用于新闻文章的分类管理。
 * </p>
 *
 * NewsCategory
 */
export interface NewsCategory {
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 分类描述
   */
  description?: string;
  /**
   * 分类ID
   */
  id?: number;
  /**
   * 分类名称
   */
  name?: string;
  /**
   * 展示排序，越小越靠前
   */
  sortOrder?: number;
  /**
   * 状态（1=启用，0=禁用）
   */
  status?: number;
  /**
   * 更新时间
   */
  updateTime?: string;
  articles?: NewsArticle[];
}

/**
 * 新闻与动态内容实体类
 * <p>
 * 对应数据库中的news_article表，用于系统官网中的新闻与动态内容展示。
 * </p>
 *
 * NewsArticle
 */
export interface NewsArticle {
  /**
   * 作者名称
   */
  author?: string;
  /**
   * 文章分类ID，关联news_category表
   */
  categoryId?: number;
  /**
   * 文章分类名称（非数据库字段）
   */
  categoryName?: string;
  /**
   * 文章内容，支持富文本（HTML）
   */
  content?: string;
  /**
   * 封面图文件ID，关联files表
   */
  coverFileId?: number;
  /**
   * 封面图文件名（非数据库字段）
   */
  coverFileName?: string;
  /**
   * 封面图额外元数据（非数据库字段）
   */
  coverMeta?: string;
  /**
   * 封面图访问URL（非数据库字段）
   */
  coverUrl?: string;
  /**
   * 创建时间
   */
  createTime?: string;
  /**
   * 文章ID
   */
  id?: number;
  /**
   * 发布时间
   */
  publishTime?: string;
  /**
   * 排序值，越小越靠前
   */
  sortOrder?: number;
  /**
   * 状态：0=草稿，1=已发布，2=已下架
   */
  status?: number;
  /**
   * 文章标题
   */
  title?: string;
  /**
   * 最后更新时间
   */
  updateTime?: string;
  /**
   * 浏览次数
   */
  viewCount?: number;
}

/**
 * com.self.company.entity.CorporateCulture
 *
 * CorporateCulture
 */
export interface CorporateCulture {
  createTime?: string;
  /**
   * 图片文件ID，关联到files表的id字段
   */
  fileId?: number;
  /**
   * 图片额外元数据（非数据库字段）
   */
  fileMeta?: string;
  /**
   * 图片文件名（非数据库字段）
   */
  fileName?: string;
  /**
   * 图片访问URL（非数据库字段）
   */
  fileUrl?: string;
  id?: number;
  sortOrder?: number;
  status?: number;
  subtitle?: string;
  title?: string;
  updateTime?: string;
}

/**
 * com.self.company.entity.CoreTeamMember
 *
 * CoreTeamMember
 */
export interface CoreTeamMember {
  /**
   * 头像文件ID，关联到files表的id字段
   */
  avatarFileId?: number;
  /**
   * 头像文件名（非数据库字段）
   */
  avatarFileName?: string;
  /**
   * 头像额外元数据（非数据库字段）
   */
  avatarMeta?: string;
  /**
   * 头像访问URL（非数据库字段）
   */
  avatarUrl?: string;
  createTime?: string;
  /**
   * 成员简介，JSON字符串
   */
  description?: string;
  id?: number;
  name?: string;
  position?: string;
  sortOrder?: number;
  status?: number;
  teamName?: string;
  teamType?: string;
  updateTime?: string;
}

/**
 * 留言信息
 *
 * UserMessageAddGroupDefault
 */
export interface ContactUsRequest {
  company?: string;
  createTime?: string;
  id?: number;
  messageContent: string;
  name: string;
  phone: string;
  status?: number;
  updateTime?: string;
}

/**
 * com.self.company.entity.TrainingCase
 *
 * TrainingCase
 */
export interface TrainingCase {
  content?: string;
  /**
   * 封面图片ID，关联到files表的id字段
   */
  coverFileId?: number;
  /**
   * 封面图片文件名（非数据库字段）
   */
  coverFileName?: string;
  /**
   * 封面图片额外元数据（非数据库字段）
   */
  coverMeta?: string;
  /**
   * 封面图片访问URL（非数据库字段）
   */
  coverUrl?: string;
  createTime?: string;
  id?: number;
  sortOrder?: number;
  status?: number;
  title?: string;
  updateTime?: string;
}

/**
 * com.self.company.entity.AiProjectDeliveryCase
 *
 * AiProjectDeliveryCase
 */
export interface AiProjectDeliveryCase {
  content?: string;
  createTime?: string;
  id?: number;
  imageFileId?: number;
  /**
   * 图片文件名（非数据库字段）
   */
  imageFileName?: string;
  /**
   * 图片额外元数据（非数据库字段）
   */
  imageMeta?: string;
  /**
   * 图片访问URL（非数据库字段）
   */
  imageUrl?: string;
  sortOrder?: number;
  status?: number;
  subtitle?: string;
  title?: string;
  updateTime?: string;
}

/**
 * com.self.company.entity.AiSuccessCase
 *
 * AiSuccessCase
 */
export interface AiSuccessCase {
  content?: string;
  createTime?: string;
  id?: number;
  imageFileId?: number;
  /**
   * 图片文件名（非数据库字段）
   */
  imageFileName?: string;
  /**
   * 图片额外元数据（非数据库字段）
   */
  imageMeta?: string;
  /**
   * 图片访问URL（非数据库字段）
   */
  imageUrl?: string;
  sortOrder?: number;
  status?: number;
  title?: string;
  updateTime?: string;
}

/**
 * com.self.company.entity.SurveyQuestion
 *
 * SurveyQuestion
 */
export interface SurveyQuestion {
  createTime?: string;
  id?: number;
  optionText?: string;
  questionText?: string;
  questionType?: string;
  sortOrder?: number;
  updateTime?: string;
}

/**
 * com.self.company.entity.AiTool
 *
 * AiTool
 */
export interface AiTool {
  /**
   * 所属分类信息（非数据库字段）
   */
  category?: AiToolCategory;
  categoryId?: number;
  createTime?: string;
  /**
   * 工具简介
   */
  description?: string;
  id?: number;
  /**
   * 工具LOGO文件ID，关联到files表的id字段
   */
  logoFileId?: number;
  /**
   * LOGO文件名（非数据库字段）
   */
  logoFileName?: string;
  /**
   * LOGO额外元数据（非数据库字段）
   */
  logoMeta?: string;
  /**
   * LOGO访问URL（非数据库字段）
   */
  logoUrl?: string;
  name?: string;
  /**
   * 跳转链接地址
   */
  redirectUrl?: string;
  sortOrder?: number;
  status?: number;
  updateTime?: string;
}

/**
* 所属分类信息（非数据库字段）
*
* AiToolCategory
*/
export interface AiToolCategory {
  createTime?: string;
  id?: number;
  /**
   * 分类LOGO文件ID，关联到files表的id字段
   */
  logoFileId?: number;
  /**
   * LOGO文件名（非数据库字段）
   */
  logoFileName?: string;
  /**
   * LOGO额外元数据（非数据库字段）
   */
  logoMeta?: string;
  /**
   * LOGO访问URL（非数据库字段）
   */
  logoUrl?: string;
  name?: string;
  sortOrder?: number;
  status?: number;
  updateTime?: string;
}

/**
 * com.self.company.entity.SupplierPartner
 *
 * SupplierPartner
 */
export interface SupplierPartner {
  /**
   * 公司地址
   */
  address?: string;
  /**
   * 封面图片文件ID
   */
  coverFileId?: number;
  /**
   * 封面文件名（非数据库字段）
   */
  coverFileName?: string;
  /**
   * 封面额外元数据（非数据库字段）
   */
  coverMeta?: string;
  /**
   * 封面访问URL（非数据库字段）
   */
  coverUrl?: string;
  createTime?: string;
  /**
   * 公司简介
   */
  description?: string;
  /**
   * 图片文件ID列表（非数据库字段，用于前端传递）
   */
  fileIds?: number[];
  id?: number;
  /**
   * 关联的图片列表（非数据库字段）
   */
  images?: SupplierPartnerImage[];
  /**
   * 公司LOGO文件ID
   */
  logoFileId?: number;
  /**
   * LOGO文件名（非数据库字段）
   */
  logoFileName?: string;
  /**
   * LOGO额外元数据（非数据库字段）
   */
  logoMeta?: string;
  /**
   * LOGO访问URL（非数据库字段）
   */
  logoUrl?: string;
  /**
   * 公司名称
   */
  name?: string;
  sortOrder?: number;
  /**
   * 合作状态 0-未合作 1-合作中
   */
  status?: number;
  updateTime?: string;
  /**
   * 跳转链接URL
   */
  url?: string;
}

/**
* com.self.company.entity.SupplierPartnerImage
*
* SupplierPartnerImage
*/
export interface SupplierPartnerImage {
  createTime?: string;
  fileId?: number;
  /**
   * 图片额外元数据（非数据库字段）
   */
  fileMeta?: string;
  /**
   * 图片文件名（非数据库字段）
   */
  fileName?: string;
  /**
   * 图片访问URL（非数据库字段）
   */
  fileUrl?: string;
  id?: number;
  sortOrder?: number;
  /**
   * 合作伙伴ID
   */
  supplierId?: number;
}

/**
 * com.self.company.entity.CompanyScaleOption
 *
 * CompanyScaleOption
 */
export interface CompanyScaleOption {
  id?: number;
  label?: string;
  sortOrder?: number;
  status?: number;
}

/**
 * com.self.company.entity.ConsultationNeedOption
 *
 * ConsultationNeedOption
 */
export interface ConsultationNeedOption {
  id?: number;
  label?: string;
  sortOrder?: number;
  status?: number;
  [property: string]: any;
}
