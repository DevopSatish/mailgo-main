import Image from "next/image"

const Brand = ({ ...props }) => (
    <Image
        src="/endb.png"
        alt="Mailgo logo"
        className="mt-2"
        {...props}
        width={80}
        height={80}
        priority
    />
)
export default Brand