const parseBlogContent = (content) => {
    return content.map((item, index) => {
        switch (item.type) {
            case 'text':
                return <p key={index}>{item.content}</p>;
            case 'image':
                return (
                    <div key={index} className="flex flex-col items-center">
                        <img src={item.content} alt={item.alt} className="w-[50vw] h-auto" />
                        {item.caption && <p className="text-sm text-gray-500">{item.caption}</p>}
                    </div>
                );
            default:
                return null;
        }
    });
}

export default parseBlogContent;