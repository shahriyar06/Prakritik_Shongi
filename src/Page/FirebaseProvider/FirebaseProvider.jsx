import { createContext, useState } from "react";

export const AuthContext = createContext(null)

const FirebaseProvider = ({ children }) => {

    const [user, setuser] = useState(null)




    const allvalue = {
        user,
    }

    return (
        <div>
            <AuthContext.Provider value={allvalue}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default FirebaseProvider;