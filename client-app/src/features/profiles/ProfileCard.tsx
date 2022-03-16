import { observer } from "mobx-react-lite";
import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image } from "semantic-ui-react";
import { Profile } from "../../app/models/profile";
import FollowButtom from "./FollowButtom";

interface Props {
    profile: Profile;
}

function truncate(str: string | undefined) {
    if (str) {
        return str.length > 20 ? str.substring(0, 15) + '...' : str;
    }
}

export default observer(function ProfileCard({ profile }: Props) {
    return (
        <Card as={Link} to={`/profile/${profile.username}`} style={{ width: '10vw' }} >
            <Image src={profile.image || 'assets/user.png'} />
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>{truncate(profile.bio)}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name="user" />
                {profile.followersCount} followers
            </Card.Content>
            <FollowButtom profile={profile} />
        </Card>
    )
})