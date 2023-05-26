import { existsSync } from 'fs';
import { resolve } from 'path';

export function getEnvPath(dest: string): string {
  const env: string | undefined = process.env.NODE_ENV;
  const fallback: string = resolve(`${dest}/.env`);
  const filename: string = env ? `${env}.env` : '.env';
  let enviroment: string = resolve(`${dest}/${filename}`);


  switch (env) {
    case 'PRODUCTION':
      enviroment =  `
        PORT=3000
        NODE_ENV=${process.env.NODE_ENV}
        
        HOST=${process.env.HOST}
        DB_PORT=${process.env.DB_PORT}
        USERNAME=${process.env.USERNAME}
        PASSWORD=${process.env.PASSWORD}
        DATABASE=${process.env.DATABASE}
          
        JIRA_TOKEN=${process.env.JIRA_TOKEN}
        JIRA_API_HEADER=${process.env.JIRA_API_HEADER}
        JIRA_ISSUE=${process.env.JIRA_ISSUE}
        JIRA_GET_PROJECTS=${process.env.JIRA_GET_PROJECTS}
        JIRA_GET_ISSUES=${process.env.JIRA_GET_ISSUES}
        JIRA_PROJECT_ID=${process.env.JIRA_PROJECT_ID}
        
        STORAGE=${process.env.STORAGE}

        MICROSERVICE_MAIL=${process.env.MICROSERVICE_MAIL}

        FIREBASE_AUDIENCE=${process.env.FIREBASE_AUDIENCE}
        FIREBASE_ISSUER=${process.env.FIREBASE_ISSUER}
      `
      break;
  
    default:
      enviroment = fallback;
      break;
  }
  
  return enviroment;
}