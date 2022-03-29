#!/bin/bash

##
#  Prose - Web
#  Build script
#
#  Copyright 2022, Prose Foundation
#  Author: Valerian Saliou https://valeriansaliou.name/
##

ABSPATH=$(cd "$(dirname "$0")"; pwd)
BASE_DIR="$ABSPATH/../"

pushd "$BASE_DIR" > /dev/null
  cur_env="development"

  if [ ! -z "$1" ]; then
    cur_env="$1"
  fi

  # TODO
  rc=0
popd > /dev/null

exit $rc

