import React from 'react';

// Require Editor JS files.
import 'froala-editor/js/froala_editor.pkgd.min.js'

// Require Editor CSS files.
import 'froala-editor/css/froala_style.min.css'
import 'froala-editor/css/froala_editor.pkgd.min.css'

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css'
import 'codemirror/lib/codemirror.css'

import '../css/froala_editor.css'
import '../css/plugins/code_view.css'
import '../css/plugins/draggable.css'
//import '../css/plugins/colors.css'
import '../css/plugins/emoticons.css'
import '../css/plugins/image_manager.css'
import '../css/plugins/image.css'
import '../css/plugins/line_breaker.css'
import '../css/plugins/table.css'
import '../css/plugins/char_counter.css'
import '../css/plugins/video.css'
import '../css/plugins/fullscreen.css'
import '../css/plugins/file.css'
import '../css/plugins/quick_insert.css'
import '../css/plugins/help.css'
import '../css/third_party/spell_checker.css'
import '../css/plugins/special_characters.css'

import $ from 'jquery';
import { findDOMNode } from 'react-dom';
import 'codemirror/lib/codemirror.js'
import 'codemirror/mode/xml/xml.js'

import '../js/froala_editor.min.js'
import '../js/plugins/align.min.js'
import '../js/plugins/char_counter.min.js'
import '../js/plugins/code_beautifier.min.js'
import '../js/plugins/code_view.min.js'
import '../js/plugins/colors.min.js'
import '../js/plugins/draggable.min.js'
import '../js/plugins/emoticons.min.js'
import '../js/plugins/entities.min.js'
import '../js/plugins/file.min.js'
import '../js/plugins/font_size.min.js'
import '../js/plugins/font_family.min.js'
import '../js/plugins/fullscreen.min.js'
import '../js/plugins/image.min.js'
import '../js/plugins/image_manager.min.js'
import '../js/plugins/line_breaker.min.js'
import '../js/plugins/inline_style.min.js'
import '../js/plugins/link.min.js'
import '../js/plugins/lists.min.js'
import '../js/plugins/paragraph_format.min.js'
import '../js/plugins/paragraph_style.min.js'
import '../js/plugins/quick_insert.min.js'
import '../js/plugins/quote.min.js'
import '../js/plugins/table.min.js'
import '../js/plugins/save.min.js'
import '../js/plugins/url.min.js'
import '../js/plugins/video.min.js'
import '../js/plugins/help.min.js'
import '../js/plugins/print.min.js'
import '../js/third_party/spell_checker.min.js'
import '../js/plugins/special_characters.min.js'
import '../js/plugins/word_paste.min.js'

class Editor extends React.Component {

    componentWillMount = () => {
        const el = findDOMNode(this.refs.editor);
        $(el).froalaEditor()
    }

    render(){
        return(
            <div ref='editor'>
                <div id='edit'>
                    EDITABLE TEXT!
                </div>
            </div>
        )
    }
}

export default Editor