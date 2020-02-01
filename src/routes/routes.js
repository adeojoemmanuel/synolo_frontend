import React from 'react';

import { Route, Switch, BrowserRouter } from "react-router-dom";

import Loader from "../components/Loader/loader.component";

/**
 * PAGES
 */
import VerifyEmail from '../pages/Auth/VerifyEmail/verify-email.page';
import { AuthProvider } from '../helpers/Auth/authContext';
import ProtectedRoute from '../helpers/Auth/protectedRoute';

const HomePage = React.lazy(() => import("../pages/HomePage/home.page"));
const AboutPage = React.lazy(() => import("../pages/AboutUs/about.page"));
const FAQPage = React.lazy(() => import("../pages/FAQ/faq.page"));
const ContactPage = React.lazy(() => import("../pages/ContactUs/contact.page"));
const MarketPage = React.lazy(() => import("../pages/Market/market.page"));
const RegisterPage = React.lazy(() => import("../pages/Auth/Register/register.page"));
const LoginPage = React.lazy(() => import("../pages/Auth/Login/login.page"));
const InvestorDashboard = React.lazy(() => import("../pages/Dashboards/Investors/investorDashboard.page"));

const Routes = () => (
    <BrowserRouter>
        <React.Suspense fallback={<Loader />}>
            <Switch>
                
                <Route path="/" exact component={HomePage} />
                <Route path="/about" exact component={AboutPage} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/contactus" component={ContactPage} />
                <Route path="/market" component={MarketPage} />
                <Route path="/register" component={RegisterPage}/>
                <Route path="/login" component={LoginPage} />
                <Route path="/verify/:id/:email" component={VerifyEmail} />

                {/* 
                         ****** Protected Routes ********
                */}
                    {/* <ProtectedRoute path="/dashboard/investor" component={InvestorDashboard} /> */}

                <AuthProvider>
                    <ProtectedRoute path="/dashboard/investor" component={InvestorDashboard} />
                    {/* <ProtectedRoute path="/register" component={RegisterPage} /> */}
                </AuthProvider>
            </Switch>
        </React.Suspense>
    </BrowserRouter>
);

export default Routes;