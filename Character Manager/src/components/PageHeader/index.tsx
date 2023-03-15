type HeaderProps = {
    title: string
} & {
    button: true
    onClick: () => void
    label: string
} | {
    button: false
}

export default function PageHeader() {
    return (
        <div>
            header
        </div>
    )
}