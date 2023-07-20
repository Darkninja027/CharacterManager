import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { $createHeadingNode, HeadingNode } from '@lexical/rich-text';
import { $setBlocksType } from '@lexical/selection';
import classNames from 'classnames';
import { $createParagraphNode, $createTextNode, $getSelection, $isRangeSelection, LexicalEditor, ParagraphNode } from 'lexical';

type EdiitorProps = {}


export default function Editor({ }: EdiitorProps) {

    const editoreConfig: InitialConfigType = {
        namespace: 'editor',
        theme: {
            "heading": {
                "h1": classNames("font-bold text-2xl")
            }
        },
        onError,
        nodes: [
            HeadingNode,
            ParagraphNode
        ]
    }

    function onError(error: Error, editor: LexicalEditor) {
        console.log(error)
    }

    function Toolbar(): JSX.Element {

        function HeadingNode() {
            const [editor] = useLexicalComposerContext()

            const onClick = (e: React.MouseEvent) => {
                editor.update(() => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) {
                        $setBlocksType(selection, () => $createHeadingNode('h1'))
                    }

                })
            }
            return (
                <button onClick={onClick}>
                    H1
                </button>
            )

        }
        function ParagraphNode() {
            const [editor] = useLexicalComposerContext()

            const onClick = (e: React.MouseEvent) => {
                editor.update(() => {
                    const selection = $getSelection();
                    if ($isRangeSelection(selection)) {
                        $setBlocksType(selection, () => $createParagraphNode())
                    }

                })
            }
            return (
                <button onClick={onClick}>
                    normal
                </button>
            )
        }
        return (
            <div className='flex gap-1'>
                <HeadingNode />
                <ParagraphNode />
            </div>
        )
    }
    return (

        <LexicalComposer initialConfig={editoreConfig}>
            <Toolbar />
            <RichTextPlugin contentEditable={<ContentEditable />} placeholder={<p>Please Enter Text</p>} ErrorBoundary={LexicalErrorBoundary} />
            <HistoryPlugin />
        </LexicalComposer>
    )
}