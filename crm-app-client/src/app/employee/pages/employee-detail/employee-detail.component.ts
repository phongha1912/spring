import {Overlay} from '@angular/cdk/overlay';
import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {map, switchMap, tap} from 'rxjs/operators';
import {Employee, EmployeeService} from 'src/app/core';
import {CoreService} from 'src/app/core/services/core.service';
import {ConfirmationService, MessageService} from "primeng/api";

class EmployeeEdit {
    isFullNameEditShown: boolean = false;
    isBirthDayEditShown: boolean = false;
    isPlaceOfBirthEditShown: boolean = false;
    isGenderEditShown: boolean = false;
    isIdNumberEditShown: boolean = false;
    isIssueDateEditShown: boolean = false;
    isRaceEditShown: boolean = false;
    isReligionEditShown: boolean = false;
    isMarriedStatusEditShown: boolean = false;
    isCellPhoneEditShown: boolean = false;
}

class EmployeeUpdatedModel {
    fullName?: string;
    birthDay?: string;
    placeOfBirth?: string;
    gender?: string;
    idNumber?: number;
    issueDate?: string;
    race?: string;
    religion?: string;
    marriedStatus?: string;
    cellPhone?: number;
    taxID?: number;
    insuranceBookNo?: number;
    address?: string;
    bankName?: string;
    bankAccount?: number;
    image?: string;
    degree?: string;
    major?: string;
    employeeID?: number;
    startDate?: string;
    contractedDate?: string;
    department?: string;
    jobTitle?: string;
    manager?: string;
}

class EmployeeToBeUpdated {
    isFullNameUpdated: boolean = false;
    isBirthDayUpdated: boolean = false;
    isPlaceOfBirthUpdated: boolean = false;
    isGenderUpdated: boolean = false;
    isIdNumberUpdated: boolean = false;
    isIssueDateUpdated: boolean = false;
    isRaceUpdated: boolean = false;
    isReligionUpdated: boolean = false;
    isMarriedStatusUpdated: boolean = false;
    isCellPhoneUpdated: boolean = false;
}

@Component({
    selector: 'crm-employee-detail',
    templateUrl: './employee-detail.component.html',
    styleUrls: ['./employee-detail.component.scss'],
    providers: [ConfirmationService, MessageService]
})
export class EmployeeDetailComponent implements OnInit {
    minYear: string = "1900";
    maxYear: string = "2021";
    maxDate: Date = new Date();
    empEdit: EmployeeEdit = new EmployeeEdit();
    empUpdated: EmployeeToBeUpdated = new EmployeeToBeUpdated();
    birthDay: Date;
    displayModal: boolean;
    employee$: Observable<Employee>;
    loading$: Subject<boolean> = new BehaviorSubject<boolean>(false);
    employees$: Observable<Employee[]>;

    currentEmp: Employee;


    constructor(private route: ActivatedRoute,
                private router: Router,
                private employeeService: EmployeeService,
                private coreService: CoreService,
                private dialog: MatDialog
        , private overlay: Overlay,
                private confirmService: ConfirmationService,
                private messageService: MessageService) {
        this.displayModal = false;
        this.birthDay = new Date();
        this.employees$ = this.employeeService.getEmployees();
        this.currentEmp = {id: ""};

        this.employee$ = this.route.paramMap.pipe(
            switchMap(params => this.employeeService.getEmployee(params.get('id')!)),
        );
    }

    ngOnInit(): void {

    }

    getLoading(): Observable<boolean> {
        return this.loading$;
    }

    /*   handleUpdate(empl: Employee) {
            const dialogRef = this.dialog.open(EmployeeEditorDialogComponent, {
                width: '800px',
                height: 'auto',
                disableClose: true,
                autoFocus: true,
                scrollStrategy: this.overlay.scrollStrategies.noop(),
                data: empl
            });

            dialogRef.afterClosed().subscribe(result => {
                console.log('The dialog was closed');
                if (result) {

                }
            });
        }*/

    showModalDialog() {
        this.displayModal = true;
    }

    updateProfile() {

        this.route.paramMap.pipe(map(params => {
            this.currentEmp.id = params.get('id') ?? "-1";
            return this.currentEmp.id;
        })).subscribe(id => {
            this.employeeService.updateEmployee(this.currentEmp.id, this.currentEmp).subscribe(() => {
                this.messageService.add({
                    severity: 'success', summary: 'Personal Information Status',
                    detail: 'Your personal information has been updated successfully!'
                });
            });
        });

    }

    toggleEmpFullnameUpdate(fullName: string) {
        this.currentEmp.fullName = fullName;
        this.empEdit.isFullNameEditShown = true;
    }

    updateEmpFullname() {
        this.empUpdated.isFullNameUpdated = true;
        this.empEdit.isFullNameEditShown = false;
        this.employee$ = this.employee$.pipe(map(emp => {
            emp.fullName = this.currentEmp.fullName;
            return emp;
        }))
    }


    toggleEmpPlaceOfBirthUpdate(placeOfBirth: string) {
        this.currentEmp.placeOfBirth = placeOfBirth;
        this.empEdit.isPlaceOfBirthEditShown = true;
    }

    updateEmpPlaceOfBirth() {
        this.empUpdated.isPlaceOfBirthUpdated = true;
        this.empEdit.isPlaceOfBirthEditShown = false;
        this.employee$ = this.employee$.pipe(map(emp => {
            emp.placeOfBirth = this.currentEmp.placeOfBirth;
            return emp;
        }));
    }

    keyPress(e: KeyboardEvent, id: string) {
        if (e.key == "Enter") {
            this.updateEmpFullname();
            this.updateEmpPlaceOfBirth();
            this.updateEmpBirthday();
            this.updateEmpReligion();
        }
    }

    confirmUpdate() {
        this.confirmService.confirm({
            message: 'Are you sure want to update this personal profile?',
            accept: () => {
                this.updateProfile();
            }
        })
    }

    toggleEmpBirthdayUpdate(birthDay: string) {
        this.currentEmp.birthDay = birthDay;
        this.birthDay = new Date(this.currentEmp.birthDay);
        this.empEdit.isBirthDayEditShown = true;
    }

    toggleEmpReligion(religion: string): void {
        this.currentEmp.religion = religion;
        this.empEdit.isReligionEditShown = true;
    }

    updateEmpReligion() {
        this.empUpdated.isReligionUpdated = true;
        this.empEdit.isReligionEditShown = false;
        this.employee$ = this.employee$.pipe(map(emp => {
            emp.religion = this.currentEmp.religion;
            return emp;
        }));
    }

    updateEmpBirthday() {
        this.empUpdated.isBirthDayUpdated = true;
        this.empEdit.isBirthDayEditShown = false;
        this.employee$ = this.employee$.pipe(map(emp => {
            this.currentEmp.birthDay = this.birthDay.toISOString();
            emp.birthDay = this.birthDay.toISOString();
            return emp;
        }));
    }

    isEmpInfoAbleToUpdate(): boolean {
        return Object.keys(this.currentEmp).length > 1;
    }
}
