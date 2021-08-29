installedModulePath=$(npm root -g)/astropheljs
starterProjectPath=$installedModulePath/lib/starter/$starterType/

mkdir $projectName
cd $projectName
initiatedProjectPath=`pwd`

echo Copying starter project ...
cp -r $starterProjectPath $initiatedProjectPath
echo ${projectName} has been created successfully