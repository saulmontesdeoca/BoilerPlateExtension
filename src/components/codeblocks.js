// eslint-disable-next-line
export default {
	react: [
		{
			title: "React statless component",
			language: "jsx",
			code: `import React from 'react';

const Component = (props) => {
    return (
        <div>
            
        </div>
    );
};

export default Component;`,
		},
		{
			title: "React memo",
			language: "jsx",
			code: `import React, { memo } from 'react';

const Component = memo(() => {
    return (
    <div>
        
    </div>
    );
});

export default Component;`,
		},
		{
			title: "Memoized stateless React component with PropTypes",
			language: "jsx",
			code: `import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Component = memo((props) => {
    return (
        <div>
            
        </div>
    );
});

Helpers.propTypes = {
    
};

export default Component;`,
		},
		{
			title: "React Class Component",
			language: "jsx",
			code: `import React from 'react';

class MyClass extends React.Component {
    state = { | },
    render() {
      return ( | );
    }
  }
  
  export default MyClass;`,
		},
		{
			title: "React Class Component With Constructor",
			language: "jsx",
			code: `import React from 'react';

class MyClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = { | };
    }
    render() {
        return ( | );
    }
    }
    
    export default MyClass;`,
		},
		{
			title: "React useEffect",
			language: "jsx",
			code: `import React, { useEffect } from 'react';

const | = props => {
    useEffect(() => {
        |
    }, []);
    return ( | );
};

export default |;`,
		},
		{
			title: "React useState",
			language: "jsx",
			code: `import React, { useState } from 'react';

const | = props => {
    const [|, set|] = useState();
    return ( | );
};

export default |;
    `,
		},
		{
			title: "React ComponentDidMount",
			language: "jsx",
			code: `componentDidMount() {
    |
}`,
		},
		{
			title: "React ComponentWillMount",
			language: "jsx",
			code: `componentWillMount() {
    |
}`,
		},
		{
			title: "React ComponentWillUnmount",
			language: "jsx",
			code: `componentWillUnmount() {
    |
}`,
		},
		{
			title: "React ComponentWillReceiveProps",
			language: "jsx",
			code: `componentWillReceiveProps(nextProps) {
    |
}`,
		},
		{
			title: "React ComponentDidUpdate",
			language: "jsx",
			code: `componentDidUpdate(prevProps, prevState) {
    |
}`,
		},
		{
			title: "React shouldComponentUpdate",
			language: "jsx",
			code: `shouldComponentUpdate(nextProps, nextState) {
    |
}`,
		},
		{
			title: "React componentDidCatch",
			language: "jsx",
			code: `componentDidCatch(error, info) {
    |
}`,
		},
		{
			title: "React ComponentDidUpdate",
			language: "jsx",
			code: `componentDidUpdate(prevProps, prevState) {
    |
}`,
		},
		{
			title: "React Login",
			language: "jsx",
			code: `import React from 'react';

class TestLoginForm extends React.Component {
	constructor(props) {
		super(props);
		// handle initialization activities
	}
	handleChangeEvents(event) {
		//handle change events	
	}
	handleSubmitevents(event) {
		// handle submit events
	}
	handlePasswordChange(event){
		//handle password change events
	}
	render() {
		return (
		<div className=" TestLoginForm ">
			<form onSubmit={this.handleSubmitevents}>
				{
					//handle error condition
				}
				<label>User Name</label>
				<input type="text" data-test="username" value={this.state.username} onChange={this.handleChangeEvents} />
				<label>Password</label>
				<input type="password" data-test="password" value={this.state.password} onChange={this. handlePasswordChange } />
				<input type="submit" value="Log In" data-test="submit" />
			</form>
		</div>
		);
	}
}`,
		},
		{
			title: "React Login With React-Bootrap",
			language: "jsx",
			code: `import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./Login.css";

export default function Login(props) {
	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");

	function validateFormFields() {
		return username.length > 0 && password.length > 0;
	}
	function handleSubmit(event) {
		event.preventDefault();
	}
	return (
		<div className="Login">
			<h1> Welcome to Edubca </h1>
			<form onSubmit={handleSubmit}>
				<FormGroup controlId="Username" bsSize="large">
					<ControlLabel>username  </ControlLabel>
					<FormControl
						autoFocus
						type="text"
						value={username}
						onChange={e => setUserName(e.target.value)}
					/>
				</FormGroup>
				<FormGroup controlId="password" bsSize="large">
					<ControlLabel>Password</ControlLabel>
					<FormControl
						value={password}
						onChange={e => setPassword(e.target.value)}
						type="password"
					/>
				</FormGroup>
			<Button block bsSize="large" disabled={!validateFormFields()} type="submit">
				Login
			</Button>
			</form>
		</div>
	);
}
render(<Login />, document.getElementById('root'));`,
		},
		{
			title: "React Signin With React-Bootrap",
			language: "jsx",
			code: `import React, { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

function Signin() {
	const [validated, setValidated] = useState(false);
	
	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
		event.preventDefault();
		event.stopPropagation();
		}
	
		setValidated(true);
	};
	
	return (
		<Form noValidate validated={validated} onSubmit={handleSubmit}>
		<Form.Row>
			<Form.Group as={Col} md="4" controlId="validationCustom01">
			<Form.Label>First name</Form.Label>
			<Form.Control
				required
				type="text"
				placeholder="First name"
				defaultValue="Mark"
			/>
			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustom02">
			<Form.Label>Last name</Form.Label>
			<Form.Control
				required
				type="text"
				placeholder="Last name"
				defaultValue="Otto"
			/>
			<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="4" controlId="validationCustomUsername">
			<Form.Label>Username</Form.Label>
			<InputGroup>
				<InputGroup.Prepend>
				<InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
				</InputGroup.Prepend>
				<Form.Control
				type="text"
				placeholder="Username"
				aria-describedby="inputGroupPrepend"
				required
				/>
				<Form.Control.Feedback type="invalid">
				Please choose a username.
				</Form.Control.Feedback>
			</InputGroup>
			</Form.Group>
		</Form.Row>
		<Form.Row>
			<Form.Group as={Col} md="6" controlId="validationCustom03">
			<Form.Label>City</Form.Label>
			<Form.Control type="text" placeholder="City" required />
			<Form.Control.Feedback type="invalid">
				Please provide a valid city.
			</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="3" controlId="validationCustom04">
			<Form.Label>State</Form.Label>
			<Form.Control type="text" placeholder="State" required />
			<Form.Control.Feedback type="invalid">
				Please provide a valid state.
			</Form.Control.Feedback>
			</Form.Group>
			<Form.Group as={Col} md="3" controlId="validationCustom05">
			<Form.Label>Zip</Form.Label>
			<Form.Control type="text" placeholder="Zip" required />
			<Form.Control.Feedback type="invalid">
				Please provide a valid zip.
			</Form.Control.Feedback>
			</Form.Group>
		</Form.Row>
		<Form.Group>
			<Form.Check
			required
			label="Agree to terms and conditions"
			feedback="You must agree before submitting."
			/>
		</Form.Group>
		<Button type="submit">Submit form</Button>
		</Form>
	);
	}
	

export default Signin;`,
		},
	],

	//--------------------------------------- Angular -----------------------------------------------
	angular: [
		{
			title: "Angular component",
			language: "jsx",
			code: `import { Component, OnInit } from '@angular/core';
@Component({,
    selector: 'Selector-Name',
    templateUrl: 'Name.component.html'
})

export class NameComponent implements OnInit {
constructor() { }

ngOnInit() { },

}`,
		},
		{
			title: "Angular pipe",
			language: "jsx",
			code: `import { Pipe, PipeTransform } from '@angular/core';

@Pipe({,
    name: 'Selector-Name'
})
            
export class NamePipe implements PipeTransform {
    transform(value: any, ...args: any[]): any {

    }
}`,
		},
		{
			title: "Angular Module",
			language: "jsx",
			code: `import { NgModule } from '@angular/core';

import { NameComponent } from './name.component';

@NgModule({
    imports: [],
    exports: [],
    declarations: [NameComponent],
    providers: [],
})
export class NameModule { }
`,
		},
		{
			title: "Angular Service",
			language: "jsx",
			code: `import { Injectable } from '@angular/core';

@Injectable({providedIn: Root})
export class ServiceNameService {
    constructor() { }

}`,
		},
		{
			title: "Angular Routes definition",
			language: "jsx",
			code: `import { Routes } from '@angular/router';

export const routes: Routes = []`,
		},
		{
			title: "Angular HttpClient Service",
			language: "jsx",
			code: `import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({providedIn: Root})
export class ServiceNameService {
    constructor(private httpClient: HttpClient) { }

}`,
		},
		{
			title: "Angular HttpInterceptor for Logging",
			language: "jsx",
			code: `import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LogInterceptor implements HttpInterceptor {
constructor() {}

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const started = Date.now();
        return next.handle(req).pipe(
            tap(event => {
                if (event instanceof HttpResponse) {
                    const elapsed = Date.now() - started;
                }
            })
        );
    }
}`,
		},
		{
			title: "Angular HttpInterceptor for Headers",
			language: "jsx",
			code: `import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const headers = req.headers
            .set('Content-Type', 'application/json');
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}`,
		},
		{
			title: "Angular HttpInterceptor - Empty",
			language: "jsx",
			code: `import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class YourInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req);
    }
}`,
		},
	],

	//--------------------------------------- Vue -----------------------------------------------

	vue: [
		{
			title: "Vue Single File Component",
			language: "jsx",
			code: `<template>
    <div>

    </div>
</template>

<script>
    export default { }
</script>

<style lang="scss" scoped>

</style>`,
		},
		{
			title: "Vue Single File Component with SASS",
			language: "jsx",
			code: `<template>
    <div>

    </div>
</template>

<script>
    export default { }
</script>

<style lang="sass" scoped>

</style>`,
		},
		{
			title: "Vue Single File Component with Typescript",
			language: "jsx",
			code: `<template>
    <div>

    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
      |
    })
</script>

<style scoped>

</style>`,
		},
		{
			title: "Vue Single File Component Composition API",
			language: "jsx",
			code: `<template>
    <div>

    </div>
</template>

<script>
export default {
    setup () {
        |
,
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>`,
		},
		{
			title: "Vue Single File Component Composition API with Typescript",
			language: "jsx",
			code: `<template>
    <div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup () {
    
        return {}
    }
})
</script>

<style scoped>

</style>`,
		},
		{
			title: "Base for Vue File Composition API - Typescript",
			language: "jsx",
			code: `<template>
    <div>

    </div>
</template>

<script lang="ts">
    import { Component, Vue } from 'vue-property-decorator';

    @Component
    export default class MyClass extends Vue {
        |
    }
</script>

<style scoped>

</style>`,
		},
	],
	readme: [
		{
			title: "Readme",
			language: "jsx",
			code: `# [ProjectName](https://project.org/) &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)]
(https://github.com/MyProject/LICENSE) [![npm version](https://img.shields.io/npm/v/MyProject.svg?style=flat)]
(https://www.npmjs.com/package/MyProject) [![CircleCI Status](https://circleci.com/gh/MyProject/MyProject.svg?style=shield&circle-token=:circle-token)]
(https://circleci.com/gh/MyProject/MyProject) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)]
(https://MyProjectjs.org/docs/how-to-contribute.html#your-first-pull-request)

MyProject is a JavaScript library for building user interfaces.

* **Declarative:** MyProject makes it painless to create interactive UIs. Design simple views for each state in your application, 
and MyProject will efficiently update and render just the right components when your data changes. Declarative views make your code more 
predictable, simpler to understand, and easier to debug.
* **Component-Based:** Build encapsulated components that manage their own state, then compose them to make complex UIs. Since component
 logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM.
* **Learn Once, Write Anywhere:** We don't make assumptions about the rest of your technology stack, so you can develop new features 
in MyProject without rewriting existing code. MyProject can also render on the server using Node and power mobile apps using
 [MyProject Native](https://MyProjectnative.dev/).

[Learn how to use MyProject in your own project](https://MyProjectjs.org/docs/getting-started.html).

## Installation

MyProject has been designed for gradual adoption from the start, and **you can use as little or as much MyProject as you need**:

* Use [Online Playgrounds](https://MyProjectjs.org/docs/getting-started.html#online-playgrounds) to get a taste of MyProject.
* [Add MyProject to a Website](https://MyProjectjs.org/docs/add-MyProject-to-a-website.html) as a '<script>' tag in one minute.
* [Create a New MyProject App](https://MyProjectjs.org/docs/create-a-new-MyProject-app.html) if you're looking for a powerful JavaScript toolchain.

You can use MyProject as a '<script>' tag from a [CDN](https://MyProjectjs.org/docs/cdn-links.html), or as a 'MyProject' package
 on [npm](https://www.npmjs.com/package/MyProject).

## Documentation

You can find the MyProject documentation [on the website](https://MyProjectjs.org/docs).  

Check out the [Getting Started](https://MyProjectjs.org/docs/getting-started.html) page for a quick overview.

The documentation is divided into several sections:

* [Tutorial](https://MyProjectjs.org/tutorial/tutorial.html)
* [Main Concepts](https://MyProjectjs.org/docs/hello-world.html)
* [Advanced Guides](https://MyProjectjs.org/docs/jsx-in-depth.html)
* [API Reference](https://MyProjectjs.org/docs/MyProject-api.html)
* [Where to Get Support](https://MyProjectjs.org/community/support.html)
* [Contributing Guide](https://MyProjectjs.org/docs/how-to-contribute.html)

You can improve it by sending pull requests to [this repository](https://github.com/MyProjectjs/MyProjectjs.org).

## Examples

We have several examples [on the website](https://MyProjectjs.org/). Here is the first one to get you started:

'''jsx
function HelloMessage() {
	return 'Hello from Example of my project';
}
'''

This example will render 'Hello from Example of my project' into a container on the page.

## Contributing

The main purpose of this repository is to continue evolving MyProject core, making it faster and easier to use.
 Development of MyProject happens in the open on GitHub, and we are grateful to the community for contributing bugfixes 
 and improvements. Read below to learn how you can take part in improving MyProject.

### [Code of Conduct](https://code.myproject.com/codeofconduct)

MyProject has adopted a Code of Conduct that we expect project participants to adhere to. Please read 
[the full text](https://code.project.com/codeofconduct) so that you can understand what actions will and will not be tolerated.

### [Contributing Guide](https://MyProjectjs.org/contributing/how-to-contribute.html)

Read our [contributing guide](https://MyProjectjs.org/contributing/how-to-contribute.html) to learn about our development process, 
how to propose bugfixes and improvements, and how to build and test your changes to MyProject.

### Good First Issues

To help you get your feet wet and get you familiar with our contribution process, we have a list of 
[good first issues](https://github.com/MyProject/MyProject/labels/good%20first%20issue) that contain bugs which have a relatively
 limited scope. This is a great place to get started.

### License

MyProject is [MIT licensed](./LICENSE).

`,
},],
	node: [
		{
			title: "Setup express",
			language: "jsx",
			code: `var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.type('text/plain');
	res.send('Hell , its about time!!');
});

app.listen(process.env.PORT || 8080);`,
		},
		{
			title: "setup a server",
			language: "jsx",
			code: `const express = require('express');
const http = require('http');

const server = express();
server.use(express.json());
const port = 5555;
//=======================================================//
//GET REQUESTS
server.get('/', (req,res) => {
	.then(() => {
		res.status(200).json({message:'sucessful get'});
	})
	.catch(err => {
	response.status(500).json({ success: false, err });
	});
});`,
		},
		{
			title: "Post endpoints",
			language: "jsx",
			code: `c// node >10
var express = require('express'); 
var app = express(); 
var bodyParser = require('body-parser');
var PORT = 3000; 

app.use(bodyParser.json());

// curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/post
	
app.post('/post', (req, res) => { 
	console.log(req.body);
	res.send("POST Request Called") 
}) 
	
app.listen(PORT, function(err){ 
	if (err) console.log(err); 
	console.log("Server listening on PORT", PORT); 
});  `,
		},

	]
};
