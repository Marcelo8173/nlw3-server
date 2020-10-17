import Orphanage from '../model/orphanates';
import imagesView from '../views/images_views';

export default{
    render(orphanages: Orphanage){
        return {
            id: orphanages.id,
            name: orphanages.name,
            latitude: orphanages.latitude,
            longitude: orphanages.longitude,
            about: orphanages.about,
            instructions: orphanages.instuctions,
            open_hours: orphanages.open_hours,
            open_on_weekends: orphanages.open_on_weekends,
            images: imagesView.renderToMany(orphanages.images)
        };
    },
    renderToMany(orphanages: Orphanage[]){
        return orphanages.map(orphanage => this.render(orphanage))
    }
}