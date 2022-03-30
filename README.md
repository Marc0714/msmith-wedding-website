# Creating a serverless website and deploying to AWS

## Deploying AWS Resources

### Register Domain via AWS

Go to Route53 in aws console and navigate to Domains >> Registered Domains.
Click Register Domain.
Search for Domain you want and proceed through purchasing wizard.

### Create SSL Certificate

Go to Amazon Certificate Manager (ACM).
Make sure to be in us-east-1 region because this is required for Cloudfront/Global Distributions.
Click Request and enter in the domain from the previous step.
Use DNS Validation for validation method.

After certificate can be seen on ACM page, click on Certificate ID link.
Click "Create records in Route 53" to finish validation.

Take note of Cert ARN for cloudformation template.

### Deploying CloudFormation Stack

See attached cloudformation.yaml.
In mappings section of template replace CertArn, BucketName, CName (domain name), and Account Number with your own values.

I used mappings to enforce being deployed to us-east-1.

Template does not drop S3 bucket or data contained, so if you need to redeploy or your cleaning up your stack empty and delete bucket.

### Pushing your website to S3

After generating the contents of your production releases (see npm run build below), copy and replace the /build on your local to your new S3 bucket.

## Running React Locally

In the project directory, you can run:

### `npm install`

Installs all modules for project and creates package-lock.json and /node-modules folder.\

Install also reports on any vulnerablities from packages being installed.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

