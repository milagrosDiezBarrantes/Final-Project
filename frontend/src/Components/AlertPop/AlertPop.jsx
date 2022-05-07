// import React from 'react';
// import { FaExclamationCircle } from 'react-icons/fa';

// export default AlertPop = ({ activeAlert, actionAlert, handleOpenAlert, handleSuccess }) => {
//     return (
//         <div>
//             {
//                 activeAlert &&
//                     <div>
//                         <div>
//                             <p> <FaExclamationCircle /> </p>
//                         </div>
//                         <div>
//                             <h2>Are you sure?</h2>
//                             <p>You won't be able to revert this</p>
//                         </div>
//                         <div>
//                             <button onClick={handleOpenAlert}>
//                                 Cancel
//                             </button>
//                             <button onClick={()=> {
//                                 handleSuccess()
//                                 handleOpenAlert()
//                             }}>
//                                 Yes {actionAlert}
//                             </button>
//                         </div>
//                         <div onClick={handleOpenAlert}>
//                         </div>
//                     </div>
//             }
//         </div>
//     )
// }
