#!/bin/bash

CMD=$1

if [ $CMD = "clean" ]
then
    echo "Cleaning targets..."
    grunt c
else
    echo "grunt $1 --env $3" 
    grunt $1 --env $3
    
    echo "node targets/$3/grasshopper"
    node targets/$3/grasshopper
fi
    