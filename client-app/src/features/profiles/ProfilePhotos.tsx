import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Card, Grid, Header, Image, Popup, Tab } from "semantic-ui-react";
import PhotoUpdloadWidget from "../../app/common/imageUpload/PhotoUpdloadWidget";
import { Photo, Profile } from "../../app/models/profile";
import { useStore } from "../../app/stores/store";

interface Props {
    profile: Profile;
}

export default observer(function ProfilePhotos({ profile }: Props) {
    const { profileStore: { isCurrentUser, updloadPhoto, uploading, setMainPhoto, loading, deletePhoto } } = useStore();
    const [addPhotoMode, setAddPhotoMode] = useState(false);
    const [target, setTarget] = useState('');


    function handlePhotoUpload(file: Blob) {
        updloadPhoto(file).then(() => setAddPhotoMode(false))
    }

    function handleSetMainPhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        setMainPhoto(photo);
    }

    function handleDeletePhoto(photo: Photo, e: SyntheticEvent<HTMLButtonElement>) {
        setTarget(e.currentTarget.name);
        deletePhoto(photo);
    }

    return (
        <Tab.Pane>
            <Grid>
                <Grid.Column width={16}>
                    <Header icon='image' content='Photos' floated="left" />
                    {isCurrentUser && (
                        <Button 
                            floated="right" 
                            content={addPhotoMode ? 'Cancel' : 'Add Photo'}
                            color={addPhotoMode ? 'red' : 'green'}
                            onClick={() => setAddPhotoMode(!addPhotoMode)}
                        />
                    )}
                </Grid.Column>
                <Grid.Column width={16}>
                    {addPhotoMode ? (
                        <PhotoUpdloadWidget uploadPhoto={handlePhotoUpload} loading={uploading} />
                    ) : (
                        <Card.Group itemsPerRow={5}>
                            {profile.photos?.map(photo => (

                                <Card key={photo.id}>
                                    <Popup
                                        style={{width: '13vw'}}
                                        hoverable
                                        position="bottom center"
                                        trigger={
                                            <Image src={photo.url} />
                                        }>
                                        {isCurrentUser && (
                                            <Popup.Content>
                                                <Button.Group fluid widths={2} style={{ marginTop: '-1px' }}>
                                                    <Button
                                                        color="green"
                                                        content='Main'
                                                        name={'main' + photo.id}
                                                        disabled={photo.isMain}
                                                        loading={target == 'main' + photo.id && loading}
                                                        onClick={e => handleSetMainPhoto(photo, e)}
                                                    />
                                                    <Button
                                                        color="red"
                                                        icon='trash alternate'
                                                        name={photo.id}
                                                        disabled={photo.isMain}
                                                        loading={target == photo.id && loading}
                                                        onClick={e => handleDeletePhoto(photo, e)}
                                                    />
                                                </Button.Group>
                                            </Popup.Content>
                                        )}
                                    </Popup>
                                </Card>
                            ))}
                        </Card.Group>
                    )}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})