function Error() {
    return (
        <div className="container" style={{display:'flex', alignItems:'center',justifyContent:'space-around'}}>
            <img style={{width:'40%'}} src="/src/assets/images/404.png" alt="" />
            <h1>404 not found</h1>
        </div>
    );
}

export default Error;