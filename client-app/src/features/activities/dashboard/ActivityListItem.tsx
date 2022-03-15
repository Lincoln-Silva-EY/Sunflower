import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Label, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { Profile } from "../../../app/models/profile";
import ActivityListItemAttendee from "./ActivityListItemAttendee";

interface Props {
    activity: Activity
    attendees: Profile[];
}

export default function ActivityListItem({ activity, attendees }: Props) {

    return (
        <Segment.Group>
            <Segment>
                {activity.isCancelled &&
                    <Label attached="top" color="red" content='Cancelled' style={{ textAlign: 'center' }} />
                }
                <Item.Group>
                    <Item>
                        <Item.Image size="tiny" circular src={activity.host?.image || '/assets/user.png'} />
                        <Item.Content>
                            {activity.isHost && (
                                <Item.Description style={{ position: 'relative' }}>
                                    <Label color="yellow" ribbon='right' style={{ position: 'absolute' }}>
                                        You are hosting
                                    </Label>
                                </Item.Description>
                            )}
                            {!activity.isHost && activity.isGoing && (
                                <Item.Description style={{ position: 'relative' }}>
                                    <Label color="green" ribbon='right' style={{ position: 'absolute' }}>
                                        You are going
                                    </Label>
                                </Item.Description>
                            )}
                            <Item.Header as={Link} to={`/activities/${activity.id}`} style={{ marginTop: '2.5vh' }}>
                                {activity.title}
                            </Item.Header>
                            <Item.Description>Hosted by <Link to={`/profile/${activity.host?.username}`}> {activity.host?.username}</Link></Item.Description>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
            <Segment>
                <span>
                    <Icon name='calendar outline' /> {format(activity.date!, 'dd / MMMM / yyyy ')}
                    <Icon name='clock outline' style={{ marginLeft: '1vw' }} /> {format(activity.date!, 'h:mm aa')}
                    <Icon name="map marker alternate" style={{ marginLeft: '1vw' }} /> {activity.venue}
                </span>
            </Segment>
            <Segment secondary>
                <ActivityListItemAttendee attendees={activity.attendees!} />
            </Segment>
            <Segment clearing>
                <span>{activity.description}</span>
                <Button
                    as={Link}
                    to={`/activities/${activity.id}`}
                    color='teal'
                    floated="right"
                    content='View'
                />
            </Segment>
        </Segment.Group>
    )
}