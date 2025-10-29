"use client"

import { useState, useEffect } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, type Path, type FieldError, Controller } from "react-hook-form"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"
import { ContactSchema, type ContactData } from "@/constants/scheme"
import { Send } from "lucide-react"
import { DialogDescription } from "@radix-ui/react-dialog"
import { Textarea } from "../ui/textarea"

export default function ContactModal({ selectedPackage }: { selectedPackage?: string }) {
    const [open, setOpen] = useState(false)

    const handleOpenModal = () => {
        if (!selectedPackage) {
            toast.error("Zəhmət olmasa əvvəlcə sizə uyğun paketi seçin", {
                id: "package-required"
            });
            return;
        }
        setOpen(true);
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setValue,
        control,
    } = useForm<ContactData>({
        defaultValues: {
            name: "",
            company: "",
            email: "",
            phone: "",
            companySize: "",
            eventsPerYear: "",
            message: "",
            package: selectedPackage || "",
        },
        resolver: zodResolver(ContactSchema),
        mode: "onChange",
    })

    // Set package value when modal opens and selectedPackage is available
    useEffect(() => {
        if (selectedPackage && open) {
            setValue("package", selectedPackage);
        }
    }, [selectedPackage, open, setValue]);

    const onSubmit = async (data: ContactData) => {
        try {
            toast.loading("Müraciətiniz göndərilir...", {
                id: "contact-form"
            })

            const response = await fetch("/api/sheets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                toast.success("Müraciətiniz uğurla göndərildi!", {
                    id: "contact-form",
                })
                setOpen(false)
                reset()
            } else {
                toast.error("Xəta baş verdi", {
                    id: "contact-form",
                    description: "Zəhmət olmasa yenidən cəhd edin."
                })
            }
        } catch (error) {
            toast.error("Bağlantı xətası", {
                id: "contact-form",
                description: "İnternet bağlantınızı yoxlayın və yenidən cəhd edin."
            })
        }
    }




    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <Button type="button" onClick={handleOpenModal} className="inline-flex w-80 h-14 text-xl bg-[#10B981] hover:bg-[#059669] items-center gap-2 hover:cursor-pointer text-white rounded-lg">
                <Send />
                Demoya Müraciət göndərin!
            </Button>

                        <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle className="text-center text-xl">Paketlərimiz üçün Demo Tələbi</DialogTitle>
                    <DialogDescription className="text-sm text-gray-500 text-center">
                        24 saat ərzində sizə geri dönüş edəcəyik
                    </DialogDescription>
                </DialogHeader>

                {selectedPackage && (
                    <div className=" bg-gray-100 p-2  rounded-lg">
                        <p className="text-sm text-gray-700">
                            <strong>Seçilmiş paket:</strong> {selectedPackage}
                        </p>
                    </div>
                )}

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
                    {(() => {
                        const fields: Array<{
                            name: keyof ContactData
                            label?: string
                            placeholder?: string
                            type?: string
                            fullWidth?: boolean
                            options?: Array<{value: string, label: string}>
                        }> = [
                                { name: "name", label: "Adınız", placeholder: "Adınızı və soyadınızı daxil edin" },
                                { name: "company", label: "Şirkətin adı", placeholder: "Şirkət adını daxil edin" },
                                { name: "email", label: "Email", placeholder: "Elektron poçt ünvanınızı daxil edin" },
                                { name: "phone", label: "Mobil nömrə", placeholder: "Mobil nömrənizi daxil edin" },
                                { 
                                    name: "companySize", 
                                    label: "Şirkət ölçüsü", 
                                    type: "select",
                                    placeholder: "Şirkət ölçüsünü seçin",
                                    options: [
                                        { value: "1-10", label: "1-10 işçi" },
                                        { value: "11-50", label: "11-50 işçi" },
                                        { value: "51-200", label: "51-200 işçi" },
                                        { value: "200+", label: "200+ işçi" }
                                    ]
                                },
                                { 
                                    name: "eventsPerYear", 
                                    label: "İldə neçə tədbir keçirirsiniz", 
                                    type: "select",
                                    placeholder: "Tədbir sayını seçin",
                                    options: [
                                        { value: "1-3", label: "1-3 tədbir" },
                                        { value: "4-6", label: "4-6 tədbir" },
                                        { value: "7-12", label: "7-12 tədbir" },
                                        { value: "12+", label: "12+ tədbir" }
                                    ]
                                },
                                { name: "message", label: "Mesajınızı daxil edin", placeholder: "Müraciətinizin mətnini buraya daxil edin", type: "textarea", fullWidth: true },
                            ]

                        return (
                            <>
                                <div className="flex flex-col gap-2">
                                    {fields
                                        .filter((f) => !f.fullWidth && f.type !== "textarea")
                                        .map((field) => {
                                            const fieldError = errors[field.name] as FieldError | undefined
                                            
                                            if (field.type === "select") {
                                                return (
                                                    <div key={String(field.name)}>
                                                        <Label className="mb-1 ml-0.5">{field.label}</Label>
                                                        <Controller
                                                            name={field.name as Path<ContactData>}
                                                            control={control}
                                                            render={({ field: controllerField }) => (
                                                                <Select onValueChange={controllerField.onChange} value={controllerField.value}>
                                                                    <SelectTrigger className="w-full">
                                                                        <SelectValue placeholder={field.placeholder} />
                                                                    </SelectTrigger>
                                                                    <SelectContent>
                                                                        {field.options?.map((option) => (
                                                                            <SelectItem key={option.value} value={option.value}>
                                                                                {option.label}
                                                                            </SelectItem>
                                                                        ))}
                                                                    </SelectContent>
                                                                </Select>
                                                            )}
                                                        />
                                                        {fieldError?.message && (
                                                            <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                        )}
                                                    </div>
                                                )
                                            }
                                            
                                            return (
                                                <div key={String(field.name)}>
                                                    <Label className="mb-1 ml-0.5">{field.label}</Label>
                                                    <Input
                                                        {...register(field.name as Path<ContactData>)}
                                                        placeholder={field.placeholder}
                                                        aria-invalid={fieldError ? "true" : "false"}
                                                    />
                                                    {fieldError?.message && (
                                                        <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                    )}
                                                </div>
                                            )
                                        })}
                                </div>

                                {fields
                                    .filter((f) => f.fullWidth || f.type === "textarea")
                                    .map((field) => {
                                        const fieldError = errors[field.name] as FieldError | undefined
                                        if (field.type === "textarea") {
                                            return (
                                                <div key={String(field.name)}>
                                                    <Label className="mb-1 ml-0.5">{field.label}</Label>
                                                    <Textarea
                                                        {...register(field.name as Path<ContactData>)}
                                                        placeholder={field.placeholder}
                                                        className="w-full  rounded-md border bg-transparent px-3 py-2 text-sm"
                                                        aria-invalid={fieldError ? "true" : "false"}
                                                    />
                                                    {fieldError?.message && (
                                                        <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                    )}
                                                </div>
                                            )
                                        }

                                        return (
                                            <div key={String(field.name)}>
                                                <Label>{field.label}</Label>
                                                <Input
                                                    {...register(field.name as Path<ContactData>)}
                                                    placeholder={field.placeholder}
                                                    aria-invalid={fieldError ? "true" : "false"}
                                                />
                                                {fieldError?.message && (
                                                    <p className="text-destructive text-sm mt-1">{fieldError.message}</p>
                                                )}
                                            </div>
                                        )
                                    })}
                                <DialogFooter>
                                    <DialogClose asChild>
                                        <Button type="button" variant="outline">Bağla</Button>
                                    </DialogClose>
                                    <Button type="submit" disabled={isSubmitting}>{isSubmitting ? "Göndərilir..." : "Müraciət et"}</Button>
                                </DialogFooter>
                            </>
                        )
                    })()}
                    <input type="hidden" {...register("package")} />
                </form>
            </DialogContent>
        </Dialog>
    )
}
