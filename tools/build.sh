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

  $(npm bin -g)/gulp --"$cur_env"
  rc=$?
popd > /dev/null

exit $rc

