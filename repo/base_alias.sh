#!/bin/bash -x

# Option parsing
nofetch=0
del=0
while [ $# -gt 0 ]; do
    case "$1" in
        -nofetch)   nofetch=1; shift ;;
	-del)       del=1; shift ;;
        *)          break ;;
    esac
done

curbase=$(pwd)
base=$1
symlinkbase=$2
if [ -z ${base} ]; then echo "specify base"; exit 1; fi
if [ -z ${symlinkbase} ]; then echo "specify symlinkbase"; exit 1; fi

function clone_alias {
    local n=${base}/${1}.git
    local a=${symlinkbase}/${2}.git

    if [ -e ${symlinkbase}/${2}.git ]; then

	if [ "$(readlink -f ${base}/${1}.git)" != "$(readlink -f ${symlinkbase}/${2}.git)" ]; then
	    echo "${symlinkbase}/${2}.git: should point to / but point to "
	    echo "  $(readlink -f ${base}/${1}.git) "
	    echo "  $(readlink -f ${symlinkbase}/${2}.git)"

	    if [ "${del}" == "1" ]; then
		rm ${symlinkbase}/${2}.git
		echo "${a} => ${n}"
		mkdir -p $(dirname ${symlinkbase}/${2}.git)
		ln -sf ${base}/${1}.git ${symlinkbase}/${2}.git
	    fi

	    #exit 1
	fi

	#${base}/${1}.git


	#echo "!!!!!!!!!!!! ${symlinkbase}/${2}.git=>$(readlink -f ${symlinkbase}/${2}.git) already exist !!!!!!!!!!!!"
    else
	echo "${a} => ${n}"
	mkdir -p $(dirname ${symlinkbase}/${2}.git)
	ln -sf ${base}/${1}.git ${symlinkbase}/${2}.git
    fi
}
