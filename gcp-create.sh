#!/bin/bash
GCP_SERVICE_NAME=cygnetai-fe
gcloud builds submit --tag gcr.io/$GCP_PROJECT_ID/$SERVICE_NAME --project $GCP_PROJECT_ID
gcloud run deploy --image gcr.io/$GCP_PROJECT_ID/$SERVICE_NAME --project $GCP_PROJECT_ID --platform managed --update-env-vars OPEN_AI_KEY=$OPEN_AI_KEY GCP_PROJECT_ID=$GCP_PROJECT_ID GCP_SERVICE_NAME=$GCP_SERVICE_NAME