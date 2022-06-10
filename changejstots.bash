# change the extension of jsx files inside src/ to tsx

actual_dir=`pwd`
cd src
for file in *.jsx; do
    mv "$file" "${file%.jsx}.tsx"
done

# list all directories in src
for dir in */; do
    cd $dir
    for file in *.jsx; do
        mv "$file" "${file%.jsx}.tsx"
    done
    cd ..
done

cd $actual_dir