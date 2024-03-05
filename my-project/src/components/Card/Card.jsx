export default function Card({arobase, }){
    return(
        <div className="bg-clrBg h-56 w-64 rounded border-t-4 border-red-500 flex flex-col justify-between items-center p-6">
            <figure className="flex w-fit gap-2 items-center">
                < img src="../assets/icon-facebook.svg" alt="Icon facebook" className="w-6 h-6" />
                <figcaption className="text-center text-sm text-gray-500 ">@nathan</figcaption>
            </figure>
            <div className="flex flex-col justify-center">
                <h3>
                    1954
                </h3>
                <p>followers</p>
            </div>
            <p>185</p>
        </div>
    );
}