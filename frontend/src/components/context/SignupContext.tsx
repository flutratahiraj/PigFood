import React from "react";

function CheckOutPage() {
  return (
    <div>
      <h1>SignUp</h1>
      {/* Lägg till innehåll för inloggningssidan */}
    </div>
  );
}

export default CheckOutPage;

// import React, { createContext, useState } from "react";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   subject: string;
// }

// interface ContextProps {
//   formData: FormData | null;
//   setFormData: React.Dispatch<React.SetStateAction<FormData | null>>;
// }

// export const SignupContext = createContext<ContextProps>({
//   formData: null,
//   setFormData: () => {},
// });

// interface SignupProviderProps {
//   children: React.ReactNode;
// }

// export const SignupProvider = ({ children }: SignupProviderProps) => {
//   const [formData, setFormData] = useState<FormData | null>(null);

//   return (
//     <SignupContext.Provider value={{ formData, setFormData }}>
//       {children}
//     </SignupContext.Provider>
//   );
// };
