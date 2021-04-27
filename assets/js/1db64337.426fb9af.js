(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{75:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(3),o=a(7),r=(a(0),a(125)),c={title:"matchUpFormat",slug:"/"},i={unversionedId:"overview",id:"overview",isDocsHomePage:!1,title:"matchUpFormat",description:"The Tennis Open Data Standards MatchUp Format Codes provide a concise way of describing methods for scoring tennis matches that is both human and machine readble.",source:"@site/docs/overview.md",slug:"/",permalink:"/tods-matchup-format-code/docs/",version:"current",sidebar:"docs"},s=[{value:"Installation",id:"installation",children:[]},{value:"Use",id:"use",children:[]},{value:"matchUpFormatCode.parse(matchUpFormat)",id:"matchupformatcodeparsematchupformat",children:[]},{value:"matchUpFormatCode.stringify(formatObject)",id:"matchupformatcodestringifyformatobject",children:[]},{value:"matchUpFormatCode.isValidMatchUpFormat(matchUpFormat)",id:"matchupformatcodeisvalidmatchupformatmatchupformat",children:[]}],m={toc:s};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",{parentName:"strong",href:"https://itftennis.atlassian.net/wiki/spaces/TODS/pages/1272840309/MatchUp+Format+Code"},"Tennis Open Data Standards"))," MatchUp Format Codes provide a concise way of describing methods for scoring tennis matches that is both human and machine readble."),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"SET3-S:6/TB7"),' is the TODS representation for "Best 2 Out Of 3 Sets (Win By Two) 6 games with Tiebreak to 7'),Object(r.b)("p",null,"This package includes two methods to make it easier to work with TODS MatchUp Format Codes in projects related to tennis, by transforming valid format codes into JSON and valid JSON objects back into format codes."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"The goal of the Tennis Open Data Standards (TODS) project is to create a single data exchange framework that allows the transfer of any tennis-related data between different information systems using consistent, agreed formats and methods."))),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"../example"},"Interactive Example")),Object(r.b)("h2",{id:"installation"},"Installation"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install tods-matchup-format-code\n")),Object(r.b)("h2",{id:"use"},"Use"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"import { matchUpFormatCode } from 'tods-matchup-format-code';\n\nlet parsedCode = matchUpFormatCode.parse('SET3-S:6/TB7');\n")),Object(r.b)("h2",{id:"matchupformatcodeparsematchupformat"},"matchUpFormatCode.parse(matchUpFormat)"),Object(r.b)("p",null,"Converts a TODS MatchUp Format Code into JSON"),Object(r.b)("p",null,"Parsing 'SET3-S:6/TB7' results in:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  bestOf: 3,\n  setFormat: { setTo: 6, tiebreakFormat: { tiebreakTo: 7 }, tiebreakAt: 6 }\n}\n")),Object(r.b)("p",null,"Parsing 'SET3-S:6/TB7-F:TB10' results in:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"{\n  bestOf: 3;\n  finalSetFormat: {\n    tiebreakSet: {\n      tiebreakTo: 10;\n    }\n  }\n  setFormat: {\n    setTo: 6;\n    tiebreakAt: 6;\n    tiebreakFormat: {\n      tiebreakTo: 7;\n    }\n  }\n}\n")),Object(r.b)("h2",{id:"matchupformatcodestringifyformatobject"},"matchUpFormatCode.stringify(formatObject)"),Object(r.b)("p",null,"Converts compliant JSON into a TODS MatchUp Format Code, the reverse of the ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},".parse()"))," method."),Object(r.b)("h2",{id:"matchupformatcodeisvalidmatchupformatmatchupformat"},"matchUpFormatCode.isValidMatchUpFormat(matchUpFormat)"),Object(r.b)("p",null,"Returns ",Object(r.b)("strong",{parentName:"p"},"boolean")," indicating whether ",Object(r.b)("inlineCode",{parentName:"p"},"matchUpFormat")," is valid."))}d.isMDXComponent=!0}}]);