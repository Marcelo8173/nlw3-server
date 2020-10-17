import Images from '../model/images';

export default{
    render(images: Images){
        return {
            id: images.id,
            url: `http://localhost:3333/uploads/${images.path}`
        };
    },
    renderToMany(images: Images[]){
        return images.map(image => this.render(image))
    }
}