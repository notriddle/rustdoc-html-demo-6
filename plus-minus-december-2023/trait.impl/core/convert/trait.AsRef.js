(function() {var implementors = {
"alloc":[["impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;'a, T, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Drain.html\" title=\"struct alloc::vec::Drain\">Drain</a>&lt;'a, T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"alloc/borrow/trait.ToOwned.html\" title=\"trait alloc::borrow::ToOwned\">ToOwned</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"enum\" href=\"alloc/borrow/enum.Cow.html\" title=\"enum alloc::borrow::Cow\">Cow</a>&lt;'_, T&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;T, A&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;T, A&gt;"],["impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"core/ffi/c_str/struct.CStr.html\" title=\"struct core::ffi::c_str::CStr\">CStr</a>&gt; for <a class=\"struct\" href=\"alloc/ffi/struct.CString.html\" title=\"struct alloc::ffi::CString\">CString</a>"],["impl&lt;T, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.IntoIter.html\" title=\"struct alloc::vec::IntoIter\">IntoIter</a>&lt;T, A&gt;"],["impl&lt;T, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"core/primitive.slice.html\">[T]</a>&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"],["impl <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"core/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"alloc/string/struct.String.html\" title=\"struct alloc::string::String\">String</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"primitive\" href=\"core/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"alloc/string/struct.Drain.html\" title=\"struct alloc::string::Drain\">Drain</a>&lt;'a&gt;"],["impl&lt;T: ?<a class=\"trait\" href=\"core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;T&gt; for <a class=\"struct\" href=\"alloc/rc/struct.Rc.html\" title=\"struct alloc::rc::Rc\">Rc</a>&lt;T, A&gt;"],["impl&lt;'a&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"primitive\" href=\"core/primitive.str.html\">str</a>&gt; for <a class=\"struct\" href=\"alloc/string/struct.Drain.html\" title=\"struct alloc::string::Drain\">Drain</a>&lt;'a&gt;"],["impl&lt;T, A: <a class=\"trait\" href=\"alloc/alloc/trait.Allocator.html\" title=\"trait alloc::alloc::Allocator\">Allocator</a>&gt; <a class=\"trait\" href=\"core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;&gt; for <a class=\"struct\" href=\"alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;T, A&gt;"]],
"core":[],
"std":[["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Iter.html\" title=\"struct std::path::Iter\">Iter</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"std/path/enum.Component.html\" title=\"enum std::path::Component\">Component</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Iter.html\" title=\"struct std::path::Iter\">Iter</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"primitive\" href=\"primitive.str.html\">str</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsString.html\" title=\"struct std::ffi::OsString\">OsString</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Components.html\" title=\"struct std::path::Components\">Components</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"enum\" href=\"std/borrow/enum.Cow.html\" title=\"enum std::borrow::Cow\">Cow</a>&lt;'_, <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/path/struct.Components.html\" title=\"struct std::path::Components\">Components</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/path/struct.PathBuf.html\" title=\"struct std::path::PathBuf\">PathBuf</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"struct\" href=\"std/string/struct.String.html\" title=\"struct std::string::String\">String</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/path/struct.Path.html\" title=\"struct std::path::Path\">Path</a>&gt; for <a class=\"primitive\" href=\"primitive.str.html\">str</a>"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"enum\" href=\"std/path/enum.Component.html\" title=\"enum std::path::Component\">Component</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"std/convert/trait.AsRef.html\" title=\"trait std::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"std/ffi/struct.OsStr.html\" title=\"struct std::ffi::OsStr\">OsStr</a>&gt; for <a class=\"struct\" href=\"std/string/struct.String.html\" title=\"struct std::string::String\">String</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()