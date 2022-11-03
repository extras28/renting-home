// Toast
import store from "app/store";
import AppToast from "general/components/AppToast";
// import DataCommonListener from "general/listeners/DataCommonListener";
import { Suspense, useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";

// Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppNotFound from "general/components/AppNotFound";
import AppDialog from "general/components/AppDialog";
import SignInScreen from "features/Auth/SignInScreen";
import SignUpScreen from "features/Auth/SignUpScreen";


// Load BS

require("bootstrap/dist/js/bootstrap.min");


// Lazy load - Code splitting

const sTag = "[App]";

function App() {
  // MARK: --- Hooks ---
  useEffect(() => {
    console.log(`${sTag} did load`);
    // injectStore(store);

    return () => {
      console.log(`${sTag} will dismiss`);
    };
  }, []);
  // const auth = useSelector((state) => state?.auth?.loggedIn);

  return (
    <>
      {/* Router */}
      <BrowserRouter>
      {/* <CustomRouter history={history}> */}
        {/* Suspense */}
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Sign In */}
            <Route path="/sign-in" element={<SignInScreen />} />

            {/* Sign Up */}
            <Route path="/sign-up" element={<SignUpScreen />} />
            {/* Not Found */}
            <Route path="*" element={<AppNotFound />} />
          </Routes>
        </Suspense>
      {/* </CustomRouter> */}
      </BrowserRouter>

      {/* App Dialog */}
      <AppDialog />
      {/* Toast */}
      <AppToast />
      {/* Listener */}
      {/* <DataCommonListener /> */}
      {/* Account Listener */}
      {/* <AccountListener /> */}
      {/* <DashboardListener /> */}
      {/* Firebase Listener */}
      {/* <FirebaseListener /> */}
    </>
  );
}

export default App;
