#!/bin/bash/

# This script creates components in the src directory 
# depending on whether it is stateless or statefull (component or container, component or presentation).
# for stateless components, the script places the component in the ./src/components directory.
# And for statefull in the ./src/containers directory.
# Requeries librarys: React, Enzyme
# Will make working with react-create-app


function makeAndFillReactComponentFile {
	path=$1
	componentName=$2

	touch $path
	fillReactComponentFile "$path" "$componentName"
}

function fillReactComponentFile {
	path=$1
	componentName=$2

	echo "import React from 'react';" > $path
	echo "import './$componentName.scss';" >> $path
	echo >> $path
	echo "const $componentName = (props) => <p>Im $componentName component </p>;" >> $path
	echo >> $path
	echo "export default $componentName;" >> $path
}

function makeAndFillTestFile {
	path=$1
	componentName=$2

	touch $path
	fillTestFile "$path" "$componentName"
}

function fillTestFile {
	path=$1
	componentName=$2

	echo "import React from 'react';" > $path
	echo "import { shallow } from 'enzyme';" >> $path
	echo "import $componentName from '../$componentName';" >> $path
	echo >> $path
	echo "describe('Renders $componentName component', () => {" >> $path
	echo "	test('renders', () => {" >> $path
	echo "		const wrapper = shallow(<$componentName />);" >> $path
	echo "		expect(wrapper).toMatchSnapshot();" >> $path
	echo "	});" >> $path
	echo "});" >> $path
}

echo "Statefull:"
read statefull

echo "Input name for component:"
read componentName

if [[ $statefull == 'y' || $statefull == 'yes' || $statefull == true ]]; then
	mkdir ../src/containers/$componentName
	mkdir ../src/containers/$componentName/__tests__

	makeAndFillReactComponentFile "../src/containers/$componentName/$componentName.jsx" "$componentName"

	touch ../src/containers/$componentName/$componentName.scss

	makeAndFillTestFile "../src/containers/$componentName/__tests__/$componentName.unit.test.js" "$componentName"
else
	mkdir ../src/components/$componentName
	mkdir ../src/components/$componentName/__tests__

	makeAndFillReactComponentFile "../src/components/$componentName/$componentName.jsx" "$componentName"

	touch ../src/components/$componentName/$componentName.scss

	makeAndFillTestFile "../src/components/$componentName/__tests__/$componentName.unit.test.js" "$componentName"
fi