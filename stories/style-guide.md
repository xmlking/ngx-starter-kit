Style Guide
===========

Below are suggestions for naming and style conventions.


1. Theme files naming conversion 
``` 
about.component.scss
about.component.scss-theme.scss
```


2. Apply padding for content if needed
```scss
:host {
  display: block;
  padding: 1.5%;
  position: relative;
}
```

3. How to generate test data?
> use  https://next.json-generator.com
> https://next.json-generator.com/4Js2XUryH
> https://randomuser.me/api/?nat=us&results=100&exc=login,registered&seed=sumo
```
[
  {
    'repeat(1, 101)': {
      id: '{{index(1)}}',
      picture: 'https://source.unsplash.com/random/200x200',
      gender: '{{random(["male"],["female"])}}',
      name: {
        first: '{{firstName(this.gender)}}',
        last: '{{surname()}}'
      },
      dob: '{{moment(this.date()).format()}}',
      company: '{{company().toUpperCase()}}',
      email: function (tags) {
        return (this.first_name + '.' + this.last_name + '@' + this.company + tags.domainZone()).toLowerCase();
      },
      phone: '+1{{phone()}}',
      address: {
        street: '{{integer(100, 999)}} {{street()}}',
        city:'{{city()}}',
        state:'{{state()}}',
        zip:'{{integer(10000, 99999)}}',
        latitude: '{{floating(-90.000001, 90)}}',
        longitude: '{{floating(-180.000001, 180)}}'
      },
      about: '{{lorem(1, "paragraphs")}}',
      likers: '{{integer(0, 32)}}'
    }
  }
]
```

4. How to generate TypeScript interfaces from given JSON?

### Online Tools
* https://jvilk.com/MakeTypes/
* http://json2ts.com/

5. NGXS naming conventions 
> Ref: https://github.com/amcdnl/ngxs#style-guide

* Stores should always have the `Store` suffix. Right: `ZooStore` Wrong: `Zoo`
* Stores should have a `.store.ts` suffix for the filename
* Selects should have a `$` suffix. Right: `animals$` Wrong: `animals`
