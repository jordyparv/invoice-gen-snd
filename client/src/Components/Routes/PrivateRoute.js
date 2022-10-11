import { Navigate, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem('authToken') ? (
          <Component {...props} />
        ) : (
          <Route path='*' element={<Navigate to='/login' replace />} />
        )
      }
    />
  );
}
