import {Auth} from '@aws-amplify/auth';
import {Amplify} from '@aws-amplify/core';
import {Footer} from '@components/footer';
import {Container} from '@components/layout';
import {Navbar} from '@components/navbar';
import {AuthProvider} from '@context/auth';
import {NotificationProvider} from '@context/notification';
import '@styles/tailwind.css';
import {DefaultSeo} from 'next-seo';
import {AppProps} from 'next/app';
import Head from 'next/head';
import {StrictMode} from 'react';
import SEO from 'src/next-seo-config';
import {awsconfig} from 'src/awsconfig';
// import 'stop-runaway-react-effects/hijack';

Auth.configure({
  region: process.env.REGION, // (required) - Region where Amazon Cognito project was created   
  userPoolId:  process.env.USER_POOL_ID, // (optional) -  Amazon Cognito User Pool ID   
  userPoolWebClientId: process.env.USER_POOL_CLIENT_ID, // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
  identityPoolId: process.env.IDENTITY_POOL_ID, // (optional) - Amazon Cognito Identity Pool ID   
  mandatorySignIn: false, // (optional) - Users are not allowed to get the aws credentials unless they are signed in   
  authenticationFlowType: 'USER_SRP_AUTH',
  identityPoolRegion: process.env.REGION,
  oauth: {
    domain: process.env.IDP_DOMAIN,
    scope: ["email", "openid", "profile", "aws.cognito.signin.user.admin"],
    redirectSignIn: process.env.REDIRECT_SIGN_IN,
    redirectSignOut: process.env.REDIRECT_SIGN_OUT,
    responseType: "code",
  },

});

// Amplify.configure(awsconfig);



Amplify.Logger.LOG_LEVEL = 'DEBUG';

const navbarHeight = '172px';
const footerHeight = '232px';

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <StrictMode>
      <Head>
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <DefaultSeo {...SEO} />
      <div className="bg-gray-50">
        <NotificationProvider>
          <AuthProvider>
            <Navbar />
            <Container
              className="mx-auto"
              style={{
                minHeight: `calc(100vh - ${navbarHeight} - ${footerHeight})`,
              }}
            >
              <Component {...pageProps} />
            </Container>
          </AuthProvider>
        </NotificationProvider>
        <Footer />
      </div>
    </StrictMode>
  );
};

export default App;
