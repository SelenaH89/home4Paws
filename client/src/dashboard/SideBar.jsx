import { Sidebar } from 'flowbite-react';
import { useContext } from 'react';
import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
} from 'react-icons/hi';
import { AuthContext } from '../context/AuthProvider';

const SideBar = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div className="bg-blue-500">
      <Sidebar aria-label="Sidebar with logo branding example">
        <Sidebar.Logo
          href="/"
          imgAlt=""
          img={user?.photoURL}
          className="w-16 h-16"
        >
          <p>{user?.displayName || 'Demo User'}</p>
        </Sidebar.Logo>
        <Sidebar.Items>
          <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
              Dashboard
            </Sidebar.Item>
            <Sidebar.Item
              href="/admin/dashboard/add"
              icon={HiOutlineCloudUpload}
            >
              Add Dog
            </Sidebar.Item>
            <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
              Manage Dogs
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
              Users
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiShoppingBag}>
              Products
            </Sidebar.Item>
            <Sidebar.Item href="/login" icon={HiArrowSmRight}>
              Sign In
            </Sidebar.Item>
            <Sidebar.Item href="/logout" icon={HiTable}>
              Log Out
            </Sidebar.Item>
          </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
};
export default SideBar;
