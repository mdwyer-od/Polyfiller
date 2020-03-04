export declare type PolyfillName =
	| PolyfillDealiasedName
	| "es"
	| "es2015"
	| "es.object"
	| "es.function"
	| "es.array"
	| "es.array-buffer"
	| "es.string"
	| "es.regexp"
	| "es.number"
	| "es.math"
	| "es.date"
	| "es.promise"
	| "es.symbol"
	| "es.collections"
	| "es.typed-array"
	| "es.reflect"
	| "esnext"
	| "es2016+"
	| "esnext.array"
	| "esnext.collections"
	| "esnext.math"
	| "esnext.number"
	| "esnext.promise"
	| "esnext.object"
	| "esnext.reflect"
	| "esnext.string"
	| "esnext.symbol"
	| "esnext.map"
	| "esnext.weak-map"
	| "esnext.set"
	| "esnext.weak-set"
	| "event"
	| "dom.collections.iterable"
	| "web-components"
	| "intl"
	| "animation"
	| "requestanimationframe"
	| "requestidlecallback"
	| "setimmediate"
	| "globalthis"
	| "adopted-style-sheets";

export declare type PolyfillDealiasedName =
	| "es.object.assign"
	| "es.object.create"
	| "es.object.define-properties"
	| "es.object.define-property"
	| "es.object.freeze"
	| "es.object.get-own-property-descriptor"
	| "es.object.get-own-property-names"
	| "es.object.get-prototype-of"
	| "es.object.is-extensible"
	| "es.object.is-frozen"
	| "es.object.is-sealed"
	| "es.object.is"
	| "es.object.keys"
	| "es.object.prevent-extensions"
	| "es.object.seal"
	| "es.object.set-prototype-of"
	| "es.object.from-entries"
	| "es.object.to-string"
	| "es.object.define-getter"
	| "es.object.define-setter"
	| "es.object.entries"
	| "es.object.get-own-property-descriptors"
	| "es.object.lookup-getter"
	| "es.object.lookup-setter"
	| "es.object.values"
	| "es.function.bind"
	| "es.function.name"
	| "es.array.concat"
	| "es.array.flat"
	| "es.array.flat-map"
	| "es.array.last-index"
	| "es.array.last-item"
	| "es.array.copy-within"
	| "es.array.every"
	| "es.array.fill"
	| "es.array.filter"
	| "es.array.find-index"
	| "es.array.find"
	| "es.array.for-each"
	| "es.array.from"
	| "es.array.index-of"
	| "es.array.is-array"
	| "es.array.iterator"
	| "es.array.join"
	| "es.array.last-index-of"
	| "es.array.map"
	| "es.array.of"
	| "es.array.reduce-right"
	| "es.array.reduce"
	| "es.array.slice"
	| "es.array.some"
	| "es.array.sort"
	| "es.array.splice"
	| "es.array.species"
	| "es.array.includes"
	| "es.array-buffer.constructor"
	| "es.array-buffer.is-view"
	| "es.array-buffer.slice"
	| "es.string.at"
	| "es.string.code-points"
	| "es.string.match-all"
	| "es.string.replace-all"
	| "es.string.trim-start"
	| "es.string.trim-end"
	| "es.string.anchor"
	| "es.string.big"
	| "es.string.blink"
	| "es.string.bold"
	| "es.string.code-point-at"
	| "es.string.ends-with"
	| "es.string.fixed"
	| "es.string.fontcolor"
	| "es.string.fontsize"
	| "es.string.from-code-point"
	| "es.string.includes"
	| "es.string.italics"
	| "es.string.iterator"
	| "es.string.link"
	| "es.string.match"
	| "es.string.pad-end"
	| "es.string.pad-start"
	| "es.string.raw"
	| "es.string.repeat"
	| "es.string.replace"
	| "es.string.search"
	| "es.string.small"
	| "es.string.split"
	| "es.string.starts-with"
	| "es.string.strike"
	| "es.string.sub"
	| "es.string.sup"
	| "es.string.trim"
	| "es.regexp.constructor"
	| "es.regexp.flags"
	| "es.regexp.to-string"
	| "es.number.constructor"
	| "es.number.epsilon"
	| "es.number.is-finite"
	| "es.number.is-integer"
	| "es.number.is-nan"
	| "es.number.is-safe-integer"
	| "es.number.max-safe-integer"
	| "es.number.min-safe-integer"
	| "es.number.parse-float"
	| "es.number.parse-int"
	| "es.number.to-fixed"
	| "es.number.to-precision"
	| "es.number.from-string"
	| "es.map"
	| "es.map.every"
	| "es.map.filter"
	| "es.map.find"
	| "es.map.find-key"
	| "es.map.from"
	| "es.map.group-by"
	| "es.map.includes"
	| "es.map.key-by"
	| "es.map.key-of"
	| "es.map.map-keys"
	| "es.map.map-values"
	| "es.map.merge"
	| "es.map.of"
	| "es.map.reduce"
	| "es.map.some"
	| "es.map.update"
	| "es.map.upsert"
	| "es.weak-map"
	| "es.weak-map.from"
	| "es.weak-map.of"
	| "es.set"
	| "es.set.add-all"
	| "es.set.delete-all"
	| "es.set.difference"
	| "es.set.every"
	| "es.set.filter"
	| "es.set.find"
	| "es.set.from"
	| "es.set.intersection"
	| "es.set.join"
	| "es.set.map"
	| "es.set.of"
	| "es.set.reduce"
	| "es.set.some"
	| "es.set.symmetric-difference"
	| "es.set.union"
	| "es.set.is-disjoint-from"
	| "es.set.is-subset-of"
	| "es.set.is-superset-of"
	| "es.weak-set"
	| "es.weak-set.from"
	| "es.weak-set.of"
	| "es.math.acosh"
	| "es.math.asinh"
	| "es.math.atanh"
	| "es.math.cbrt"
	| "es.math.clz32"
	| "es.math.cosh"
	| "es.math.expm1"
	| "es.math.fround"
	| "es.math.hypot"
	| "es.math.imul"
	| "es.math.log1p"
	| "es.math.log2"
	| "es.math.log10"
	| "es.math.sign"
	| "es.math.sinh"
	| "es.math.tanh"
	| "es.math.trunc"
	| "es.math.clamp"
	| "es.math.deg-per-rad"
	| "es.math.degrees"
	| "es.math.fscale"
	| "es.math.iaddh"
	| "es.math.imulh"
	| "es.math.isubh"
	| "es.math.rad-per-deg"
	| "es.math.radians"
	| "es.math.scale"
	| "es.math.signbit"
	| "es.math.umulh"
	| "es.data-view"
	| "es.date.now"
	| "es.date.to-iso-string"
	| "es.date.to-json"
	| "es.date.to-primitive"
	| "es.date.to-string"
	| "es.promise.finally"
	| "es.promise.constructor"
	| "es.promise.all-settled"
	| "es.promise.try"
	| "es.promise.any"
	| "es.symbol.constructor"
	| "es.symbol.async-iterator"
	| "es.symbol.has-instance"
	| "es.symbol.is-concat-spreadable"
	| "es.symbol.iterator"
	| "es.symbol.match"
	| "es.symbol.match-all"
	| "es.symbol.replace"
	| "es.symbol.search"
	| "es.symbol.species"
	| "es.symbol.split"
	| "es.symbol.to-primitive"
	| "es.symbol.to-string-tag"
	| "es.symbol.unscopables"
	| "es.symbol.description"
	| "es.symbol.pattern-match"
	| "es.typed-array.copy-within"
	| "es.typed-array.every"
	| "es.typed-array.fill"
	| "es.typed-array.filter"
	| "es.typed-array.find"
	| "es.typed-array.find-index"
	| "es.typed-array.float32-array"
	| "es.typed-array.float64-array"
	| "es.typed-array.for-each"
	| "es.typed-array.from"
	| "es.typed-array.includes"
	| "es.typed-array.index-of"
	| "es.typed-array.int8-array"
	| "es.typed-array.int16-array"
	| "es.typed-array.int32-array"
	| "es.typed-array.iterator"
	| "es.typed-array.join"
	| "es.typed-array.last-index-of"
	| "es.typed-array.map"
	| "es.typed-array.of"
	| "es.typed-array.reduce"
	| "es.typed-array.reduce-right"
	| "es.typed-array.reverse"
	| "es.typed-array.set"
	| "es.typed-array.slice"
	| "es.typed-array.some"
	| "es.typed-array.sort"
	| "es.typed-array.subarray"
	| "es.typed-array.to-locale-string"
	| "es.typed-array.to-string"
	| "es.typed-array.uint8-array"
	| "es.typed-array.uint8-clamped-array"
	| "es.typed-array.uint16-array"
	| "es.typed-array.uint32-array"
	| "es.reflect.apply"
	| "es.reflect.construct"
	| "es.reflect.define-property"
	| "es.reflect.delete-property"
	| "es.reflect.get"
	| "es.reflect.get-own-property-descriptor"
	| "es.reflect.get-prototype-of"
	| "es.reflect.has"
	| "es.reflect.is-extensible"
	| "es.reflect.own-keys"
	| "es.reflect.prevent-extensions"
	| "es.reflect.set"
	| "es.reflect.set-prototype-of"
	| "es.reflect.define-metadata"
	| "es.reflect.delete-metadata"
	| "es.reflect.get-metadata"
	| "es.reflect.get-metadata-keys"
	| "es.reflect.get-own-metadata"
	| "es.reflect.get-own-metadata-keys"
	| "es.reflect.has-metadata"
	| "es.reflect.has-own-metadata"
	| "es.reflect.metadata"
	| "regenerator-runtime"
	| "systemjs"
	| "performance.now"
	| "blob"
	| "url"
	| "base64"
	| "xhr"
	| "dom.collections.iterator"
	| "dom.collections.for-each"
	| "fetch"
	| "intl.core"
	| "intl.list-format"
	| "intl.relative-time-format"
	| "proxy"
	| "window"
	| "document"
	| "element"
	| "scroll-behavior"
	| "get-computed-style"
	| "node.contains"
	| "node.parentelement"
	| "queryselector"
	| "document-fragment"
	| "request-idle-callback"
	| "request-animation-frame"
	| "intersection-observer"
	| "mutation-observer"
	| "resize-observer"
	| "custom-elements"
	| "shadow-dom"
	| "template"
	| "zone"
	| "class-list"
	| "dom-token-list"
	| "object-fit"
	| "console"
	| "event.constructor"
	| "event.focusin"
	| "event.hashchange"
	| "custom-event"
	| "event-source"
	| "pointer-event"
	| "set-immediate"
	| "web-animations"
	| "global-this"
	| "constructable-style-sheets"
	| "proto";
