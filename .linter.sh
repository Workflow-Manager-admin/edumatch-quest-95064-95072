#!/bin/bash
cd /home/kavia/workspace/code-generation/edumatch-quest-95064-95072/main_container_for_edumatch_quest
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

