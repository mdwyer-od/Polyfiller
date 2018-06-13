import {PolyfillName} from "./polyfill-name";

export interface IPolyfillDictAlias {
	polyfills: PolyfillName[];
}

export interface IPolyfillDictEntryBase {
	features: string[];
	meta?: {[key: string]: string};
	version: string;
	dependencies: PolyfillName[];
}

export interface IPolyfillLibraryDictEntry extends IPolyfillDictEntryBase {
	library: string;
	relativePaths: string[];
}

export interface IPolyfillLocalDictEntry extends IPolyfillDictEntryBase {
	localPaths: string[];
}

export declare type PolyfillDictNormalizedEntry = IPolyfillLibraryDictEntry|IPolyfillLocalDictEntry;
export declare type PolyfillDictEntry = IPolyfillDictAlias|PolyfillDictNormalizedEntry;

export declare type PolyfillDict = {
	[Key in PolyfillName]: PolyfillDictEntry;
};