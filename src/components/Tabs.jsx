// https://reactstrap.github.io/?path=/docs/components-nav--tabs
import {useState} from 'react';
import {Nav, NavItem, NavLink, TabContent, TabPane} from 'reactstrap';

export default function Tabs() {
    const [activeTab, setActiveTab] = useState("1");
    return (
        <div>
            <Nav tabs>
                <NavItem>
                    <NavLink
                        active
                        href="#"
                        onClick={() => setActiveTab("1")}>Favorites</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        active
                        href="#"
                        onClick={() => setActiveTab("2")}>Reviews</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        active
                        href="#"
                        onClick={() => setActiveTab("3")}>Shops</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        disabled // need logic so tab is 'active' for admin
                        href="#"
                        onClick={() => setActiveTab("4")}>Users</NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId="1">Subset of favorites + link to favorites</TabPane>
                <TabPane tabId="2">Subset of reviews + link to reviews</TabPane>
                <TabPane tabId="3">Shop(s) + link to shop</TabPane>
                <TabPane tabId="4">Subset of users + link to users</TabPane>
            </TabContent>
        </div>
    );
}