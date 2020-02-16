#!/bin/bash/

# This script creates components in the src directory 
# depending on whether it is stateless or stateful (component or container, component or presentation).
# for stateless components, the script places the component in the ./src/components directory.
# And for stateful in the ./src/containers directory.
# Requeries librarys: React, Enzyme
# Will make working with react-create-app

# Create and fill .jsx React component file
function makeAndFillReactComponentFile {
	path=$1
	componentName=$2

	touch $path
	fillReactComponentFile "$path" "$componentName"
}

# Write code into .jsx React component file
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

# Create and fill .unit.test.js test file
function makeAndFillTestFile {
	path=$1
	componentName=$2

	touch $path
	fillTestFile "$path" "$componentName"
}

# Write code into .unit.test.js test file
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

# Create structure stateful component
function makestatefulComponent {
	componentName=$1

	mkdir ../src/containers/$componentName
	mkdir ../src/containers/$componentName/__tests__

	makeAndFillReactComponentFile "../src/containers/$componentName/$componentName.jsx" "$componentName"

	touch ../src/containers/$componentName/$componentName.scss

	makeAndFillTestFile "../src/containers/$componentName/__tests__/$componentName.unit.test.js" "$componentName"
}

# Create structure stateless component
function makeStatelessComponent {
	componentName=$1

	mkdir ../src/components/$componentName
	mkdir ../src/components/$componentName/__tests__

	makeAndFillReactComponentFile "../src/components/$componentName/$componentName.jsx" "$componentName"

	touch ../src/components/$componentName/$componentName.scss

	makeAndFillTestFile "../src/components/$componentName/__tests__/$componentName.unit.test.js" "$componentName"
}

echo "Stateful? Answer yes(y) or no(n) :"
read stateful

echo "Input name for component :"
read componentName

if [[ $stateful == 'y' || $stateful == 'yes' || $stateful == true ]]; then
	makestatefulComponent "$componentName"
else
	makeStatelessComponent "$componentName"
fi