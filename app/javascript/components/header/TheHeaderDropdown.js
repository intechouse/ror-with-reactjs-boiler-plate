import React from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { freeSet } from "@coreui/icons";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import { signOutUser } from "../../store/redux-token-auth-config";
import { ROOT } from "../../routes/routing";

const TheHeaderDropdown = (props) => {
  const history = useHistory();

  const signOut = (e) => {
    e.preventDefault();
    const { signOutUser } = props;
    signOutUser();
    history.replace(ROOT);
  };

  return (
    <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
      <CDropdownToggle className="c-header-nav-link" caret={false}>
        <div className="c-avatar">
          <CImg
            src={
              "data:image/png;base64,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"
            }
            className="c-avatar-img"
            alt="admin@bootstrapmaster.com"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem>
          <CIcon content={freeSet.cilUser} className="mfe-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem>
          <CIcon content={freeSet.cilSettings} className="mfe-2" />
          Settings
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={signOut}>
          <CIcon content={freeSet.cilLockLocked} className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
};

const mapStateToProps = (state) => {
  return {
    state,
  };
};

export default connect(mapStateToProps, { signOutUser })(TheHeaderDropdown);
