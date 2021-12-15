import React from 'react'
import "./Topbar.css"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                {/* ======== Left ========= */}
                <div className="topLeft">
                    <span className="logo">Human Resources Manager</span>
                </div>
                {/* ========== Right ========== */}
                <div className="topRight">
                    <div className="topbarIconContainer">
                          <box-icon type='solid' name='bell-ring'></box-icon>
                          <span className="topIconBag">2</span>
                    </div>
                    <div className="topbarIconContainer">
                          <box-icon type='logo' name='github'></box-icon>
                    </div>
                    <div className="topbarIconContainer">
                          <box-icon name='globe'></box-icon>
                    </div>
                    <div className="topbarIconContainer">
                          <box-icon type='solid' name='cog'></box-icon>
                    </div>
                </div>
            </div>
        </div>
    )
}
