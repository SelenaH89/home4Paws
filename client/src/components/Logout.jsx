import { getAuth, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  return (
    <div className="h-screen bg-teal-100 flex items-center justify-center">
      <button className="bg-red-700 px-8 py-2" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};
