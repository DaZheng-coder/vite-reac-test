
import UserSelector from './components/UserSelector'
import { IUserData } from './components/UserSelector/type';


function App() {
  return (
    <div className='flex flex-col items-center justify-center h-screen gap-10'>
      {/* 多选 */}
      <div>多选</div>
      <UserSelector 
        onSelect={(selected) => {
          console.log('*** selected', selected);
        }} 
        selectProps={{
          mode: 'multiple',
          allowClear: true,
          placeholder: 'Please select',
          style: { width: '500px' },
        }}
      />
      {/* 单选 */}
      <div>单选</div>
      <UserSelector 
        onSelect={(selected) => {
          console.log('*** selected', selected);
        }} 
        selectProps={{
          allowClear: true,
          placeholder: 'Please select',
          style: { width: '500px' },
        }}
      />
      {/* 自定义 */}
      <div>自定义</div>
      <UserSelector<IUserData> 
        config={{
          fetchUrl: '/api/v1/get_user_list',
          format: (item) => ({
            label: item.name,
            value: item.id,
          })
        }}
        onSelect={(selected) => {
          console.log('*** selected', selected);
        }} 
        selectProps={{
          allowClear: true,
          placeholder: 'Please select',
          style: { width: '500px' },
        }}
      />
    </div>
  )
}

export default App
