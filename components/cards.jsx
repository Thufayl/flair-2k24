export default function Cards(){
    return(
    <div className = "h-full items-center bg-spider">
      <div className = "flex gap-12 p-5 content-center">
      <div className = "w-52 h-60 border rounded-xl backdrop-blur-sm">
          <div className ="h-32 border rounded-xl">
            <h1 className = "text-center">Card 1</h1>
          </div>
      </div>
      <div className = "w-52 h-60 border rounded-xl">
        <h1 className = "text-center">Card 2</h1>
      </div>
      <div className = "w-52 h-60 border rounded-xl backdrop-blur-sm">
      <h1 className = "text-center">Card 3</h1>
      </div>
    </div>
    </div>
    );
}