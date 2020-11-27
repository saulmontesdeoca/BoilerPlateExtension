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
};
