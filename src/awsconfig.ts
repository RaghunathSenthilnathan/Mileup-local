const awsconfig = {
    aws_cognito_region: "us-east-1", // (required) - Region where Amazon Cognito project was created   
    aws_user_pools_id:  "us-east-1_RyiME5aYA", // (optional) -  Amazon Cognito User Pool ID   
    aws_user_pools_web_client_id:"oqk17nl9c26ks8s5441ocmel2", // (optional) - Amazon Cognito App Client ID (App client secret needs to be disabled)
    aws_cognito_identity_pool_id: "us-east-1:9f07597a-b551-4467-8c24-ac0d9317fc29", // (optional) - Amazon Cognito Identity Pool ID   
    Auth:{
      mandatorySignIn: false,
      region: "us-east-1_RyiME5aYA",
      userPoolId: "us-east-1_RyiME5aYA",
      identityPoolId: "us-east-1:9f07597a-b551-4467-8c24-ac0d9317fc29",
      userPoolWebClientId: "oqk17nl9c26ks8s5441ocmel2",
    }
  }