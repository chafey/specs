(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{219:function(e,t,a){"use strict";a.r(t);var s=a(0),i=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"ipld-schema-kinds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ipld-schema-kinds"}},[e._v("#")]),e._v(" IPLD Schema Kinds")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Extending-the-IPLD-Data-Model"}},[e._v("Extending the IPLD Data Model")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Data-Model-Kinds"}},[e._v("Data Model Kinds")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Schema-Kinds"}},[e._v("Schema Kinds")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#List"}},[e._v("List")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Map"}},[e._v("Map")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Union"}},[e._v("Union")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Struct"}},[e._v("Struct")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Enum"}},[e._v("Enum")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Copy"}},[e._v("Copy")])])])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Value-Type-Modifiers"}},[e._v("Value Type Modifiers")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Nullable-Values"}},[e._v("Nullable Values")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Optional-Fields"}},[e._v("Optional Fields")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Fields-with-Implicit-Values"}},[e._v("Fields with Implicit Values")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Combining-Nullable-Optional-and-Implicit"}},[e._v("Combining Nullable, Optional, and Implicit")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Choosing-between-Optional-and-Implicit"}},[e._v("Choosing between Optional and Implicit")])])])]),e._v(" "),a("li",[a("a",{attrs:{href:"#Understanding-Cardinality"}},[e._v("Understanding Cardinality")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#Cardinality-Examples"}},[e._v("Cardinality Examples")])])])])]),e._v(" "),a("h2",{attrs:{id:"extending-the-ipld-data-model"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#extending-the-ipld-data-model"}},[e._v("#")]),e._v(" Extending the IPLD Data Model")]),e._v(" "),a("h3",{attrs:{id:"data-model-kinds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-model-kinds"}},[e._v("#")]),e._v(" Data Model Kinds")]),e._v(" "),a("p",[e._v('IPLD Schemas define a set of "kinds" that are built upon the\n'),a("a",{attrs:{href:"https://github.com/ipld/specs/blob/master/data-model-layer/data-model.md#kinds",target:"_blank",rel:"noopener noreferrer"}},[e._v("IPLD Data Model"),a("OutboundLink")],1),e._v(".\nThe Data Model defines the basic set of data types (kinds) that are easily\nrepresentable by common programming languages and are supportable by expressive\nserialization formats such as JSON and CBOR. The Data Model defines its list of\nkinds as:")]),e._v(" "),a("ul",[a("li",[e._v("Null")]),e._v(" "),a("li",[e._v("Boolean")]),e._v(" "),a("li",[e._v("Integer")]),e._v(" "),a("li",[e._v("Float")]),e._v(" "),a("li",[e._v("String")]),e._v(" "),a("li",[e._v("Bytes")]),e._v(" "),a("li",[e._v("List")]),e._v(" "),a("li",[e._v("Map")]),e._v(" "),a("li",[e._v("Link")])]),e._v(" "),a("h3",{attrs:{id:"schema-kinds"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#schema-kinds"}},[e._v("#")]),e._v(" Schema Kinds")]),e._v(" "),a("p",[e._v("IPLD Schemas, while built upon the data model, enables the definition of data\nstructures that give us new discrete kinds, thus extending the Data Model Kinds\ninto a new list of Schema Kinds:")]),e._v(" "),a("ul",[a("li",[e._v("Null")]),e._v(" "),a("li",[e._v("Boolean")]),e._v(" "),a("li",[e._v("Integer")]),e._v(" "),a("li",[e._v("Float")]),e._v(" "),a("li",[e._v("String")]),e._v(" "),a("li",[e._v("Bytes")]),e._v(" "),a("li",[e._v("List")]),e._v(" "),a("li",[e._v("Map")]),e._v(" "),a("li",[e._v("Link")]),e._v(" "),a("li",[a("strong",[e._v("Union")])]),e._v(" "),a("li",[a("strong",[e._v("Struct")])]),e._v(" "),a("li",[a("strong",[e._v("Enum")])]),e._v(" "),a("li",[a("strong",[e._v("Copy")])])]),e._v(" "),a("p",[e._v("We define "),a("em",[a("strong",[e._v('"Recursive Kinds"')])]),e._v(" as the kinds that are comprised of other\nkinds: List, Map, Union, Struct, and Enum. These kinds provide the primary\nmechanism through which IPLD Schemas can be used to describe non-trivial\ndata structures.")]),e._v(" "),a("p",[e._v("Further, we define Copy as a "),a("em",[a("strong",[e._v('"Meta Kind"')])]),e._v(" because it is useful for\nsimplifying schema authoring and/or increasing the descriptiveness of a schema\nfor the purpose of documentation. It exists only within schema tooling and is\nnot exposed to user-facing code or data.")]),e._v(" "),a("h4",{attrs:{id:"list"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[e._v("#")]),e._v(" List")]),e._v(" "),a("p",[e._v("As a Schema Kind, Lists have more restrictions in the data they can contain. In\nthe data model, a List is defined simply as a list of arbitrary data model\nkinds with no strict restrictions that may require uniformity. At the schema\nlayer, a List is defined as a list of one specific schema type. For example,\n"),a("code",[e._v("type Foo [String]")]),e._v(" defines a list of Strings, and "),a("em",[e._v("only")]),e._v(" matches a list of\nStrings. This restriction isn't as limiting as it may appear because Unions\nallow for significant flexibility, particularly in the case of "),a("code",[e._v("kinded")]),e._v(" Unions.")]),e._v(" "),a("h4",{attrs:{id:"map"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[e._v("#")]),e._v(" Map")]),e._v(" "),a("p",[e._v("Similar to List, a Map at the schema layer requires a strict definition of the\nvalue types. The data model dictates that IPLD only supports string keys, so any\ntype used as keys in schema Maps must be represented as strings. The value types\nhave the same restrictions as for List element types. For example,\n"),a("code",[e._v("type Bar {String:Float}")]),e._v(" matches a map with Float values, and "),a("em",[e._v("only")]),e._v(" Float\nvalues. But as in List, Unions allow for additional flexibility in the data\nmodel kinds that may appear as values.")]),e._v(" "),a("h4",{attrs:{id:"union"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#union"}},[e._v("#")]),e._v(" Union")]),e._v(" "),a("p",[e._v("Unions are represented as a "),a("strong",[e._v("Map")]),e._v(" in the data model for "),a("code",[e._v("keyed")]),e._v(", "),a("code",[e._v("envelope")]),e._v("\nand "),a("code",[e._v("inline")]),e._v(" representations, and varying data model kinds for "),a("code",[e._v("kinded")]),e._v(" unions,\nas described by "),a("router-link",{attrs:{to:"/schemas/representations.html"}},[e._v("representations.md")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"struct"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#struct"}},[e._v("#")]),e._v(" Struct")]),e._v(" "),a("p",[e._v("Structs are represented as a "),a("strong",[e._v("Map")]),e._v(" in the data model by default but may be\nused to describe "),a("strong",[e._v("String")]),e._v(" and "),a("strong",[e._v("List")]),e._v(" encodings, as described by\n"),a("router-link",{attrs:{to:"/schemas/representations.html"}},[e._v("representations.md")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"enum"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enum"}},[e._v("#")]),e._v(" Enum")]),e._v(" "),a("p",[e._v("Enums are represented as either a "),a("strong",[e._v("String")]),e._v(" or "),a("strong",[e._v("Int")]),e._v(" in the data model, as\ndescribed by "),a("router-link",{attrs:{to:"/schemas/representations.html"}},[e._v("representations.md")]),e._v(".")],1),e._v(" "),a("h4",{attrs:{id:"copy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#copy"}},[e._v("#")]),e._v(" Copy")]),e._v(" "),a("p",[e._v("Copy is a Meta Kind that indicates that a type should be implemented and encoded\nthe same as another type but with an alternate name. This is a short-hand to\navoid defining multiple types of the same shape and encoding but with different\nnames.")]),e._v(" "),a("h2",{attrs:{id:"value-type-modifiers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value-type-modifiers"}},[e._v("#")]),e._v(" Value Type Modifiers")]),e._v(" "),a("p",[e._v("Values and fields in recursive types can have modifiers.\nThese modifiers are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("nullable")]),e._v(" for map values, list values, and struct fields")]),e._v(" "),a("li",[a("code",[e._v("optional")]),e._v(" for struct fields")]),e._v(" "),a("li",[a("code",[e._v("implicit")]),e._v(" for struct fields -- in some representations")])]),e._v(" "),a("h3",{attrs:{id:"nullable-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nullable-values"}},[e._v("#")]),e._v(" Nullable Values")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("nullable")]),e._v(" modifier means that either the modified type may be present,\n"),a("strong",[e._v("or")]),e._v(" its place may be occupied by the null value.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("nullable")]),e._v(" modifier is valid on map values, list values, and struct fields.")]),e._v(" "),a("p",[e._v("The presence of a "),a("code",[e._v("nullable")]),e._v(' modifier increases the cardinality of a field\'s\nvalid members by one -- see the "Cardinality Examples" table below.')]),e._v(" "),a("h3",{attrs:{id:"optional-fields"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#optional-fields"}},[e._v("#")]),e._v(" Optional Fields")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("optional")]),e._v(" modifier means that either the modified type may be present,\n"),a("strong",[e._v("or")]),e._v(" it may be missing entirely in the data.  This is distinct from null:\nfor example, in a map, optionality regards if the key is "),a("em",[e._v("missing")]),e._v(",\nin contrast to the key being present but with a value of null.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("optional")]),e._v(" modifier is only valid on struct fields (and only for some\nrepresentation strategies; structs represented as maps and structs represented\nas lists have slightly different optionality semantics (e.g. list-based\nrepresentations may only allow optionals at the beginning and end of the list)).")]),e._v(" "),a("p",[e._v("The presence of an "),a("code",[e._v("optional")]),e._v(' modifier increases the cardinality of a field\'s\nvalid members by one -- see the "Cardinality Examples" table below.')]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("optional")]),e._v(" modifier may be stacked with the "),a("code",[e._v("nullable")]),e._v(" modifier.")]),e._v(" "),a("h3",{attrs:{id:"fields-with-implicit-values"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fields-with-implicit-values"}},[e._v("#")]),e._v(" Fields with Implicit Values")]),e._v(" "),a("p",[e._v("An "),a("code",[e._v("implicit")]),e._v(" modifier declares that when a field is found absent in data,\nit should instead be treated as some other value in the domain.\nAt the same time, if an application sets the field to that value,\nit will be mapped to absense of that field when represented.")]),e._v(" "),a("p",[e._v('Implicit values may be considered similar to "defaults" -- and if you\'re looking\nfor defaults, you should look at implicits -- but we\'ve chosen a distinctive\nname for implicits because "defaults" are often a one-way conversion;\nwhereas we\'ve designed the implicit value system specifically to work\nbidirectionally -- both during serialization and deserialization -- without\nlosing information.')]),e._v(" "),a("p",[e._v("It may be interesting to note that implicits are a concept that resides in\nthe "),a("em",[e._v("representation")]),e._v(" clause rather than the "),a("em",[e._v("type")]),e._v(" definition clause.\nThis is the case because implicits do not change the cardinality of the type\n(see the "),a("a",{attrs:{href:"#understanding-cardinality"}},[e._v("Understanding Cardinality")]),e._v(" table\nlater in this document for more examples of what this means, and how it\ncompares in semantics with the other modifiers).\nAs a representational rather than type definition feature, the syntatic\nposition for an implicit declaration is on the end of the line declaring a\nfield, and in paranthesis (the same as where the 'rename' and other\nrepresentation-level directives can be found).")]),e._v(" "),a("p",[e._v("The precise semantics of implicit values may vary per representation strategy;\nthe discussion here is only for the general pattern, and you should also\nrefer to the "),a("router-link",{attrs:{to:"/schemas/representations.html#representation-strategy-reference"}},[e._v("reference documentation for representation strategies")]),e._v("\nfor more details specific to the representations strategies you use.")],1),e._v(" "),a("h3",{attrs:{id:"combining-nullable-optional-and-implicit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#combining-nullable-optional-and-implicit"}},[e._v("#")]),e._v(" Combining Nullable, Optional, and Implicit")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("nullable")]),e._v(" and "),a("code",[e._v("optional")]),e._v(" modifiers may be freely combined without issue,\nas may be the "),a("code",[e._v("nullable")]),e._v(" and "),a("code",[e._v("implicit")]),e._v(" modifiers.")]),e._v(" "),a("p",[e._v("It is not valid to combine the "),a("code",[e._v("optional")]),e._v(" and "),a("code",[e._v("implicit")]),e._v(" modifiers -- since\nboth regard behavior around struct fields when the data is absent in the serial\nform, it only makes sense to use exclusively one or the other on a field.")]),e._v(" "),a("p",[e._v("There may be additional restrictions on whether "),a("code",[e._v("optional")]),e._v(" and "),a("code",[e._v("implicit")]),e._v("\nmodifiers may be used on a struct field based on what kind of representation\nstrategy the struct has.  For example, "),a("code",[e._v("optional")]),e._v(" and "),a("code",[e._v("implicit")]),e._v(" cannot be\nused in fields in the middle of a struct when the representation is as tuple,\nbecause this could make parsing ambiguous.  The\n"),a("router-link",{attrs:{to:"/schemas/representations.html#representation-strategy-reference"}},[e._v("reference documentation for representation strategies")]),e._v("\nshould provide more detailed information on this.")],1),e._v(" "),a("h3",{attrs:{id:"choosing-between-optional-and-implicit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#choosing-between-optional-and-implicit"}},[e._v("#")]),e._v(" Choosing between Optional and Implicit")]),e._v(" "),a("p",[e._v("Use "),a("code",[e._v("implicit")]),e._v(" when the absense of a value should be treated as another\nvalue that fits unambiguously into your domain; use "),a("code",[e._v("optional")]),e._v(" when there's\nno such in-domain value.")]),e._v(" "),a("p",[e._v("For example, if you have some integer field, and if "),a("code",[e._v("0")]),e._v(" is distinctive from\nfrom the field being absent, use "),a("code",[e._v("optional")]),e._v(".\nIf "),a("code",[e._v("0")]),e._v(" (or some other value of your choice like "),a("code",[e._v("-1")]),e._v(") can be used as a\nsentinel value in your application logic, while not being serialized as such,\nthen you may wish to consider using "),a("code",[e._v("implicit")]),e._v(".")]),e._v(" "),a("p",[e._v('One usage pattern to particularly note: imagine writing a schema for defining\nconfiguration that a user may provide, and it has some concept of "defaults".\nIf your application also needs to be able to '),a("em",[e._v("remember")]),e._v(" whether a value was\nthe default or explicitly user-provided (e.g. to re-emit the config without\naltering this), you want to use "),a("code",[e._v("optional")]),e._v("!\nIn this situation, "),a("code",[e._v("implicit")]),e._v(" may cause the provided value to be lost at the\napplication-layer if it was equal to the default, whereas "),a("code",[e._v("optional")]),e._v(" will\nexpose and correctly preserve the value's presense or absence.")]),e._v(" "),a("h2",{attrs:{id:"understanding-cardinality"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#understanding-cardinality"}},[e._v("#")]),e._v(" Understanding Cardinality")]),e._v(" "),a("h3",{attrs:{id:"cardinality-examples"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cardinality-examples"}},[e._v("#")]),e._v(" Cardinality Examples")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("Schema")]),e._v(" "),a("th",[e._v("Valid Matching Representations")]),e._v(" "),a("th",[e._v("Cardinality")]),e._v(" "),a("th",[e._v("Comments")])]),e._v(" "),a("tr",[a("td",{attrs:{width:"40%"}},[a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Foo")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tbar Bool\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("td",{attrs:{width:"20%"}},[a("code",[e._v('{"bar": true}')]),a("br"),e._v(" "),a("code",[e._v('{"bar": false}')]),a("br")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("The cardinality of `Bool` is 2; the struct has no other members, so that's it.\n")])]),e._v(" "),a("tr",[a("td",[a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Foo")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tbar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("nullable")]),e._v(" Bool\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("td",[a("code",[e._v('{"bar": true}')]),a("br"),e._v(" "),a("code",[e._v('{"bar": false}')]),a("br"),e._v(" "),a("code",[e._v('{"bar": null}')]),a("br")]),e._v(" "),a("td",[e._v("3")]),e._v(" "),a("td",[e._v("2+1.  The `nullable` modifier adds one to the cardinality, since a null value is now a valid match.")])]),e._v(" "),a("tr",[a("td",[a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Foo")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tbar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" Bool\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("td",[a("code",[e._v('{"bar": true}')]),a("br"),e._v(" "),a("code",[e._v('{"bar": false}')]),a("br"),e._v(" "),a("code",[e._v("{}")]),a("br")]),e._v(" "),a("td",[e._v("3")]),e._v(" "),a("td",[e._v("2+1.  The `optional` modifier adds one to the cardinality, since a map missing the key is now a valid match.")])]),e._v(" "),a("tr",[a("td",[a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Foo")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tbar "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("optional")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("nullable")]),e._v(" Bool\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("td",[a("code",[e._v('{"bar": true}')]),a("br"),e._v(" "),a("code",[e._v('{"bar": false}')]),a("br"),e._v(" "),a("code",[e._v('{"bar": null}')]),a("br"),e._v(" "),a("code",[e._v("{}")]),a("br")]),e._v(" "),a("td",[a("b",[e._v("4")])]),e._v(" "),a("td",[e._v("2+1+1.  *Each* of the modifiers cumulatively adds one valid matching representation, and thus add one to the cardinality.")])]),e._v(" "),a("tr",[a("td",[a("div",{staticClass:"language-ipldsch extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ipldsch"}},[a("code",[a("span",{pre:!0,attrs:{class:"token typedef"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("Foo")])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tbar Bool\n"),a("span",{pre:!0,attrs:{class:"token representation"}},[e._v("} "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("representation")])]),e._v(" map "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\tfield bar default "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])])]),e._v(" "),a("td",[a("code",[e._v('{"bar": true}')]),a("br"),e._v(" "),a("code",[e._v("{}")]),a("br")]),e._v(" "),a("td",[e._v("2")]),e._v(" "),a("td",[e._v("Default values mean that encoding should never include the value if it's the default.  That means the set of valid representations *changes*, but it doesn't *grow* because one representation becomes invalid at the same time as a new representation is added.")])])])])}),[],!1,null,null,null);t.default=i.exports}}]);