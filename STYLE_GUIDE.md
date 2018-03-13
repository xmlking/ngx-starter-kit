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
```
[
  {
    'repeat(5, 100)': {
      id: '{{index()}}',
      gender: '{{random(["male"],["female"])}}',
      first_name: '{{firstName(this.gender)}}',
      last_name: '{{surname()}}',
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
        zip:'{{integer(10000, 99999)}}'
      }
    }
  }
]
```

4. NGXS naming conventions 
> Ref: https://github.com/amcdnl/ngxs#style-guide

* Stores should always have the `Store` suffix. Right: `ZooStore` Wrong: `Zoo`
* Stores should have a `.store.ts` suffix for the filename
* Selects should have a `$` suffix. Right: `animals$` Wrong: `animals`
