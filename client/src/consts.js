import Registration from './Components/Registration';
//import Invoice from './Components/Invoice';
import Users from './Components/UserTable';
//import InvoiceForm from './Components/Invoice/InvoiceForm';
import Invoice from './Components/Invoice';
import InvoiceTable from './Components/InvoiceTable';
import Login from './Components/Login';
export const List = [
  {
    link: '/registration',
    component: <Registration title={'Create Account'} />,
  },
  {
    link: '/users',
    component: <Users />,
  },
  {
    link: '/',
    component: <Invoice />,
  },
  {
    link: '/sent-invoice',
    component: <InvoiceTable title={'Sent Invoice'} />,
  },
  {
    link: '/pending-invoice',
    component: <InvoiceTable title={'Pending Invoice'} />,
  },
];
