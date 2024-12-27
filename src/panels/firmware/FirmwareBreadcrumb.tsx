import React from "react";
import { FirmwareChoice } from "../../services";
import { BreadcrumbItem } from "react-bootstrap";

type FirmwareChoiceProps = {
    choice: FirmwareChoice;
    onClick(choice: FirmwareChoice);
};

const FirmwareBreadcrumb = ({ choice, onClick }: FirmwareChoiceProps) => {
    return (
        <BreadcrumbItem key={choice.name}>
            <a href="#" onClick={() => onClick(choice)}>
                {choice.name}
            </a>
        </BreadcrumbItem>
    );
};

export default FirmwareBreadcrumb;
